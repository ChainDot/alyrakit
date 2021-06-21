import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = ({ isOpen, onClose }) => {
  const [sampleRequest, setSampleRequest] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // get the data
    // do sth with the data
    setSampleRequest(true);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Apply for a free sample</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!sampleRequest ? (
            <form onSubmit={handleFormSubmit}>
              <FormControl id="name" mb="4">
                <FormLabel>Your name</FormLabel>
                <Input placeholder="Joe Doe" required />
              </FormControl>
              <FormControl id="email" mb="4">
                <FormLabel>Your email</FormLabel>
                <Input type="email" placeholder="joe@doe.com" required />
              </FormControl>

              <Button type="submit" mb="4">
                Submit
              </Button>
            </form>
          ) : (
            <Alert status="success" mb="4">
              <AlertIcon />
              Thank you! You will receive your sample soon!
            </Alert>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Form;
