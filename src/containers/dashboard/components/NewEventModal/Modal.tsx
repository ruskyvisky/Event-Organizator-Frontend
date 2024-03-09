import React from 'react'
import { Modal, Switch , Input, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
interface Props {
    isOpen: any,
    onClose: any
}
const NewEventModal = ({ isOpen, onClose }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<NewEventData>();

  
    return (
        <>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Yeni Etkinlik</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Input  {...register('name', { required: true })}  placeholder='Etkinlik Adı' mt={4}/>
                        <Input {...register('description', { required: true })}  placeholder='Etkinlik Açıklaması' mt={4}/>
                        <Input {...register('location', { required: true })} placeholder='Etkinlik Yeri' mt={4}/>
                        <Input {...register('date', { required: true })} type='datetime-local'   mt={4}/>
                        <Switch {...register('isPublic', { required: true })} mt={4}>Etkinlik Herkese Açık mı?</Switch>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='orange' mr={3}
                        onClick={handleSubmit((data) => console.log(data))}
                        >
                            Oluştur
                        </Button>
                        <Button variant='ghost'
                            onClick={onClose}
                        >İptal</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewEventModal;