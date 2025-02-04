
import { AdminNav } from "../components/AdminNav";
import { useRef, useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.min.css";
import { Button, Divider, Text, Loader, Title } from "@mantine/core";
import { IconDownload } from "@tabler/icons";
import { useQuery } from "@tanstack/react-query";
import { getAllRequestsForAdmin } from "../api/sitterApi";

const AdminRequestDetails = () => {
  const gridRef = useRef();
  const { data, isLoading, isError } = useQuery(
    ["requests"],
    getAllRequestsForAdmin,
    { retry: false }
  );

  const defaultColDef = {
    sortable: true,
    filter: true,
  };
  const [columnDefs] = useState([
    { field: "req_id" },
    { field: "pet_id" },
    { field: "user_id" },
    { field: "date" },
    { field: "time" },
    { field: "base_prize" },
    { field: "is_personal" },
    { field: "is_accepted" },
    { field: "sitter_id" },
  ]);
  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);
  const onBtExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <AdminNav activeLabel="Requests" />
        <div
            className="ag-theme-material"
            style={{ minWidth: 1100, maxHeight: "83vh" }}
          >
            <Title mt="md" color="dimmed">
              Requests
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

export default AdminRequestDetails;
