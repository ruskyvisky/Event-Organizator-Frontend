import { Box, Flex, Spacer, IconButton, Avatar ,Text} from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <Box bg="orange" px={4} py={3}>
      <Flex alignItems="center">
      <Text fontSize="xl" color="white">Etkinlikler</Text>
        <Spacer />
        <IconButton
          aria-label="Hesabım"
          icon={<MdOutlineAccountCircle size={25} color="white" />}
          variant="ghost"
        />
        <IconButton
          aria-label="Çıkış Yap"
          size={'md'}
            icon={<MdLogout  size={25} color="white" />}
          variant="ghost"
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
