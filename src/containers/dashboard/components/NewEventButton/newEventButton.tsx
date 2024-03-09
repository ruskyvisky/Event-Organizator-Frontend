import { Button } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";


interface Props {
    onOpen: any
}

const NewEventButton = ({
    onOpen
}: Props) => {
    return (
        
        <Button  rightIcon={<MdAdd/>}  colorScheme='orange' onClick={onOpen}>
            Yeni Etkinlik
        </Button>
    );
};

export default NewEventButton;