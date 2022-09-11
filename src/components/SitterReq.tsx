import { Paper, Text, Title, Image, SimpleGrid, Button } from "@mantine/core";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import ViewSitterRequest from "./ViewSitterRequest";


function SitterReq() {
 const navigate = useNavigate()
 const [reqViewOpen, setReqViewOpen] = useState(false)

  return (
    <>
    <ViewSitterRequest reqViewOpen={reqViewOpen} setReqViewOpen={setReqViewOpen}/>
      <Title mt="lg">Available sitter requests</Title>
      <div className="sitter-req-card">
        <Paper withBorder mt="md" shadow="md">
          <SimpleGrid cols={3}>
            <Image
              height={150}
              width={200}
              src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              radius="md"
            />
            <div className="sitter-req-card-details">
                <Text size="md" color="dimmed" weight={500}>
                  Date: 09-12-2022
                </Text>
                <Text size="md" color="dimmed" weight={500}>
                  Type: Dog
                </Text>
                <Text size="md" color="dimmed" weight={500}>
                  Pinocode: 682006
                </Text>
              <Text size="md" color="dimmed" weight={500}>
                Base Amount: Rs. 500
              </Text>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Button onClick={()=>setReqViewOpen(true)}>View</Button>
            </div>
          </SimpleGrid>
        </Paper>
      </div>
    </>
  );
}

export default SitterReq;
