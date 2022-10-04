import {
  Paper,
  Text,
  Title,
  Image,
  SimpleGrid,
  Button,
  Loader,
} from "@mantine/core";
import { useState } from "react";
import ViewSitterRequest from "./ViewSitterRequest";
import {  useQuery} from "@tanstack/react-query";
import { getActiveRequestsByPincode } from "../api/sitterApi";


function SitterReq({ userData }: any) {
  const [reqViewOpen, setReqViewOpen] = useState(false);
  const [reqData, setReqData] = useState({})

  const { data, isLoading, isError } = useQuery(["active-by-pin"], () =>
    getActiveRequestsByPincode(userData.pincode),{ retry: false }
  );

  const handleViewOpen = (reqData:any)=>{
        setReqData(reqData)
        setReqViewOpen(true)
    }


  return (
    <>
      <ViewSitterRequest
        reqViewOpen={reqViewOpen}
        setReqViewOpen={setReqViewOpen}
        data={reqData}
      />
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <Loader variant="bars" />
        </div>
      ) : isError ? (
        <Text mt={50} size={20} align="center" weight={600} color="dimmed">
          You don't have any active requests
        </Text>
      ) : (
        data?.map((req: any) => {
          return (
            <div className="sitter-req-card">
              <Paper withBorder mt="md" shadow="md">
                <SimpleGrid cols={3}>
                  <Image
                    height={120}
                    width={150}
                    src={req.pet_img}
                    radius="md"
                  />
                  <div className="sitter-req-card-details">
                    <Text size="md" color="dimmed" weight={500}>
                      Date: {req.date}
                    </Text>
                    <Text size="md" color="dimmed" weight={500}>
                      Type: {req.pet_type}
                    </Text>
                    <Text size="md" color="dimmed" weight={500}>
                      Pinocode: {req.pincode}
                    </Text>
                    <Text size="md" color="dimmed" weight={500}>
                      Base Amount: Rs. {req.base_prize}
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button onClick={() => handleViewOpen(req)}>View</Button>
                  </div>
                </SimpleGrid>
              </Paper>
            </div>
          );
        })
      )}
    </>
  );
}

export default SitterReq;
