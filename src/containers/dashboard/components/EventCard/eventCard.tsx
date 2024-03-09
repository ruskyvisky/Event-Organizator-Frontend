import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading,  Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdAccessTime } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const eventCard = () => {
  return (
    <Card maxW='sm'  margin={5}>
    <CardBody>
    
      <Stack mt='6' spacing='3'>
        <Heading size='md'>Müthiş Buluşma!!</Heading>
        <Text>
ÖYLE BÖYLE BULUŞMA YOK YA Nİ ANLATAMAMA HARİKA KEİSN GEL AGAAAA
        </Text>
        <Stack direction={'row'}>
        <MdAccessTime  /> 
        <Text as={'b'}>
          12.12.2021
          </Text>
      
        </Stack>
        <Stack direction={'row'} >

        <MdLocationOn />
            <Text as={'b'}>
            İstanbul
            </Text>
       </Stack>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='orange' borderRadius='md'>
          Katıl
        </Button>
        <Button variant={'outline'} colorScheme='orange' borderRadius='md'>
            Detaylar
        </Button>

     
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default eventCard