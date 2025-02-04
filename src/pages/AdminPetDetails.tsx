import { AdminNav } from "../components/AdminNav";
import { useRef, useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.min.css";
import { Button, Divider, Text, Loader, Title } from "@mantine/core";
import { IconDownload } from "@tabler/icons";
import { useQuery } from "@tanstack/react-query";
import { getAllPetsForAdmin } from "../api/sitterApi";

const AdminPetDetails = () => {
  const gridRef = useRef();
  const { data, isLoading, isError } = useQuery(
    ["pets"],
    getAllPetsForAdmin,
    { retry: false }
  );

  const defaultColDef = {
      sortable: true,
      filter: true,
  };
  const [columnDefs] = useState([
    { field: "id" },
    { field: "owner_id" },
    { field: "pet_name" },
    { field: "pet_type" },
    { field: "pet_gender" },
    { field: "pet_weight" },
    { field: "pet_desc" },
  ]);
  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);
  const onBtExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <AdminNav activeLabel="Pets" />
        <div
            className="ag-theme-material"
            style={{ minWidth: 1100, maxHeight: "83vh" }}
          >
            <Title mt="md" color="dimmed">
              Pets
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
            ></AgGridReact>
        </>
      )}
  </div>
    </div>
  );
};

export default AdminPetDetails;
