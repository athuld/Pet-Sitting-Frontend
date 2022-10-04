import { Avatar, Button, Grid, Paper,Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons";
import { useState } from "react";
import SitterRating from "./SitterRating";

const OwnerNotification = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
  <>
  <SitterRating isOpen={isOpen} setIsOpen={setIsOpen}/>
    <div className="owner-noti-card">
      <Paper p="md">
        <Grid>
          <Grid.Col span={4} style={{display:"grid",placeItems:"center"}}>
            <Avatar.Group>
              <Avatar
                radius={100}
                size="xl"
                src="http://res.cloudinary.com/athuld/image/upload/v1662994992/jrndcgqitgt5ye7ipnsz.jpg"
              />
              <Avatar
                radius={100}
                size="xl"
                src="http://res.cloudinary.com/athuld/image/upload/v1663013144/mnjzutozezlm6mntjztl.jpg"
              />
            </Avatar.Group>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text color="dimmed">
                Pet: Toby
            </Text>
            <Text>
                <div className="owner-noti-sitter" >
                Sitter: Abhishek 
                <IconInfoCircle/>
                </div>
            </Text>
            <Text color="dimmed">
                Cost: Rs 500
            </Text>
          </Grid.Col>
          <Grid.Col span={3} style={{display:"grid",placeItems:"center"}}>
            <Button onClick={()=>setIsOpen(true)}>Review Sitter</Button>
          </Grid.Col>
        </Grid>
      </Paper>
    </div>
    </>
  );
};

export default OwnerNotification;
