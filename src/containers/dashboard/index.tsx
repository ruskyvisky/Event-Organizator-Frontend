import React from 'react'
import { Flex, Grid, Spacer } from '@chakra-ui/react'
import EventCard from '@/containers/dashboard/components/EventCard/eventCard'
import Navbar from '../../components/NavBar/navbar'
import NewEventButton from './components/NewEventButton/newEventButton'
export default function EventListPage() {
  return (
    <>
    <Flex padding={5} > 
      <Spacer/>
<NewEventButton/>
      
    </Flex>
    <Grid templateColumns='repeat(5, 1fr)' gap={6}> 
<EventCard/>
<EventCard/>
<EventCard/>

<EventCard/>
<EventCard/>
<EventCard/>
<EventCard/>
    
    </Grid>
    </>
  )
}
