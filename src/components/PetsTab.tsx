import { Button, Loader, SimpleGrid,Text } from '@mantine/core'
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'
import { getPetDetails } from '../api/sitterApi';
import AddPet from './AddPet';
import { PetCard } from './PetCard';

const PetsTab = () => {
  const [opened, setOpened] = useState(false);
  const {
    data: petData,
    isLoading: isPetLoading,
    isError,
  } = useQuery(["pet"], getPetDetails, { retry: false });
    return (
        <>
        <AddPet opened={opened} setOpened={setOpened} />
          <Button
            disabled={petData?.length >= 4 ? true : false}
            onClick={() => setOpened(true)}
            mb={30}
          >
            Add a pet
          </Button>
          {isPetLoading ? (
            <div style={{ textAlign: "center" }}>
              <Loader variant="bars" />
            </div>
          ) : isError ? (
            <Text mt={100} size={20} align="center" weight={600} color="dimmed">
              No pets added. Click on 'Add Pet' to add a pet
            </Text>
          ) : (
            <SimpleGrid cols={4} spacing={28}>
              {petData?.map((pet: any) => (
                <PetCard pet={pet} />
              ))}
            </SimpleGrid>
          )}
        </>
    )
}

export default PetsTab

