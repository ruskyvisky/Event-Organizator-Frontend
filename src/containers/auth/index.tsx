"use client"
import React, { useState } from 'react';
import { Box, Input, Button, Text, Center, Stack , InputGroup, InputRightElement} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FormData } from '@/interfaces/formData';


const App = () => {
  const [login, setLogin] = useState(true);
  const [show, setShow] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const handleClick = () => setShow(!show);

  const handleLogin = (data: FormData) => {
    console.log(data); // Giriş verilerini konsola yazdır
  };

  const handleRegister = (data: FormData) => {
    console.log(data); // Kayıt verilerini konsola yazdır
  };

  const switchForm = () => {
    setLogin(!login);
  };

  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Stack direction="column" spacing={4}>
        {!login && (
          <Box>
            <Text>E-posta</Text>
            <Center>
              <Input {...register('email', { required: true })} />
            </Center>
            {errors.email && <Text color="red.500">E-posta gerekli.</Text>}
          </Box>
        )}
        <Box>
          <Text>Kullanıcı Adı</Text>
          <Center>
            <Input {...register('username', { required: true })} />
          </Center>
          {errors.username && <Text color="red.500">Kullanıcı adı gerekli.</Text>}
        </Box>
        <Box>
          <Text>Şifre</Text>
          <Center>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                {...register('password', { required: true })}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Gizle' : 'Göster'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Center>
          {errors.password && <Text color="red.500">Şifre gerekli.</Text>}
        </Box>
        <Button colorScheme='orange' onClick={handleSubmit(login ? handleLogin : handleRegister)}>
          {login ? "Giriş Yap" : "Kayıt Ol"}
        </Button>
        <Center>
          <Button onClick={switchForm} variant={"ghost"}>
            {login ? "Hesap Oluştur" : "Giriş Yap"}
          </Button>
        </Center>
      </Stack>
    </Box>
  );
};

export default App;
