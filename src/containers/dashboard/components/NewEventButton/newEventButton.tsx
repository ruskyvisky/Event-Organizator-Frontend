import { Button } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

const NewEventButton = () => {
    return (
        
        <Button  rightIcon={<MdAdd/>}  colorScheme='orange'>
            Yeni Etkinlik
        </Button>
    );
};

export default NewEventButton;