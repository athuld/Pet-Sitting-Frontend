import { AdminNav } from "../components/AdminNav";
import { useRef, useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.min.css";
import { Button, Divider, Text, Loader, Title } from "@mantine/core";
import { IconDownload } from "@tabler/icons";
import { useQuery } from "@tanstack/react-query";
import { getAllUsersForAdmin } from "../api/sitterApi";

const AdminUserDetails = () => {
  const gridRef = useRef();
  const { data, isLoading, isError } = useQuery(
    ["users"],
    getAllUsersForAdmin,
    { retry: false }
  );

  const defaultColDef = {
    sortable: true,
    filter: true,
  };
  const [columnDefs] = useState([
    { field: "user_id" },
    { field: "username" },
    { field: "name" },
    { field: "email" },
    { field: "gender" },
    { field: "age" },
    { field: "address" },
    { field: "pincode" },
    { field: "phone" },
    { field: "is_petsitter" },
  ]);
  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);
  const onBtExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <AdminNav activeLabel="Users" />
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
          <div
            className="ag-theme-material"
            style={{ minWidth: 1100, maxHeight: "83vh" }}
          >
            <Title mt="md" color="dimmed">
              Users
            </Title>
            <Divider mb="md" />
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
          </div>
        </>
      )}
    </div>
  );
};

export default AdminUserDetails;
