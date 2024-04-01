"use client"
import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';

function App() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  

  // Mock data
  const mockComments = [
    "Bu bir harika yazı!",
    "Etkileyici bir içerik, teşekkürler!",
    "Çok ilginç, devamını bekliyorum.",
  ];

  return (
    <ChakraProvider>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Input
            placeholder="Yorum yaz..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button colorScheme="teal" >
            Yorum Yap
          </Button>
          <Box>
            {comments.map((comment, index) => (
              <Box key={index} mt={4}>
                <Text fontWeight="bold">{`Kullanıcı ${index + 1}:`}</Text>
                <Text>{comment}</Text>
              </Box>
            ))}
            {mockComments.map((comment, index) => (
              <Box key={index} mt={4}>
                <Text fontWeight="bold">{`Mock Kullanıcı ${index + 1}:`}</Text>
                <Text>{comment}</Text>
              </Box>
            ))}
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
