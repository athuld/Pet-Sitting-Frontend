import { AdminNav } from "../components/AdminNav";
import { useRef, useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.min.css";
import {
  Button,
  Divider,
  Text,
  Loader,
  Title,
  Paper,
  Stack,
} from "@mantine/core";
import { IconDownload } from "@tabler/icons";
import { useQuery } from "@tanstack/react-query";
import { getAllTransactionsForAdmin } from "../api/sitterApi";

const AdminTransactionDetails = () => {
  const gridRef = useRef();
  let totalRevenue=0;
  const { data, isLoading, isError } = useQuery(
    ["revenue"],
    getAllTransactionsForAdmin,
    { retry: false }
  );

  const defaultColDef = {
    sortable: true,
    filter: true,
  };
  const [columnDefs] = useState([
    { field: "transaction_id" },
    { field: "amount" },
    { field: "charges" },
    { field: "transaction_date", filter: "agDateColumnFilter" },
  ]);
  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);
  const onBtExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <AdminNav activeLabel="Transactions" />
      <div
        className="ag-theme-material"
        style={{ minWidth: 800, maxHeight: "60vh" }}
      >
        <Title mt="md" color="dimmed">
          Transactions
        </Title>
        <Divider mb="md" />
          {isLoading ? (
            <div style={{ textAlign: "center" }}>
              <Loader variant="bars" />
            </div>
          ) : isError ? (
            <Text mt={50} size={20} align="center" weight={600} color="dimmed">
              You don't have any new notifications
            </Text>
          ) : (
            <>
            {data.forEach((item:any)=>{
                totalRevenue+=item["charges"]
                })}
              <Paper p="xl" m="sm">
                <Text size={30}>Total Revenue: ₹ {totalRevenue}</Text>
              </Paper>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  onClick={onBtExport}
                  compact
                  variant="subtle"
                  mb="xs"
                  leftIcon={<IconDownload />}
                >
                  Download
                </Button>
              </div>
              <AgGridReact
                rowData={data}
                ref={gridRef}
                pagination={true}
                paginationAutoPageSize={true}
                defaultColDef={defaultColDef}
                columnDefs={columnDefs}
                // onFirstDataRendered={onFirstDataRendered}
              ></AgGridReact>
            </>
          )}
        </div>
    </div>
  );
};

export default AdminTransactionDetails;
