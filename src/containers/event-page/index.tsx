import { Box, Button, Heading, Text } from "@chakra-ui/react";
import  EventInfoCard  from "./components/EventInfoCard/EventInfoCard";
import Comments from "./components/Comments/Comment";
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
       <EventInfoCard />
       <Comments/>
      </Box>
    </Box>
  );
}

export default EventDetailPage;