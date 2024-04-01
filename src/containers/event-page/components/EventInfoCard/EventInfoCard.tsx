import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
const EventInfoCard = () => {
  return (
    <Box>
    <Box mt={5} bg="gray.100" p="4" borderRadius="md" display={'flex'} flexDirection={'row'} >
    <Box m="2" p={5}>
      <MdOutlineCalendarMonth  size={25}/>
      <Text>25 Mart 2024</Text>
    </Box>
    <Box m="2" p={5}>
    <MdAccessTime size={25} />
      <Text>19.00</Text>
    </Box>
   <Box m="2" p={5}>
   <MdLocationOn size={25} />

      <Text>Istanbul, Türkiye</Text>
    </Box>  
    </Box>
  </Box>
  )
}

export default EventInfoCard