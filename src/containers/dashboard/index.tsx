"use client";
import React from "react";
import { Flex, Grid, Spacer } from "@chakra-ui/react";
import EventCard from "@/containers/dashboard/components/EventCard/eventCard";
import Navbar from "../../components/NavBar/navbar";
import NewEventButton from "./components/NewEventButton/newEventButton";
import NewEventModal from "./components/NewEventModal/Modal";
import { useDisclosure } from "@chakra-ui/react";
export default function EventListPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex padding={5}>
        <Spacer />
        <NewEventButton onOpen={onOpen} />
        <NewEventModal isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Grid>
    </>
  );
}
