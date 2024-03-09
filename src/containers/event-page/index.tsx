import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function EventDetailPage() {
  return (
    <Box maxW="600px" m="auto" p="4">
      <Heading mb="4">Mütiş bi buluşma</Heading>

      <Box>
        <Box>
          <Box mb="4">
            <Text fontWeight="bold">Açıklama:</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nisl condimentum fringilla. Sed nec suscipit purus
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur maiores ab unde minima aut quia exercitationem, dicta adipisci perferendis repellendus, cumque quos sed nisi nesciunt totam. Iure distinctio dolorem fugit.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque minima tempore soluta, dolorum sed facere ipsam alias nobis placeat eveniet, ducimus quo quis libero necessitatibus error iusto laboriosam id?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur alias ab? Laboriosam cumque aspernatur natus quaerat neque ipsa libero asperiores reprehenderit, saepe obcaecati quibusdam odio mollitia impedit nam voluptatem?
            </Text>
          </Box>
          <Button colorScheme="orange">Katıl</Button>
        </Box>
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
      </Box>
    </Box>
  );
}

export default EventDetailPage;