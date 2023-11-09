import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import toast from 'react-hot-toast';
import { AiOutlinePlus } from 'react-icons/ai';
import { AddProjectForm } from './components/AddProjectForm';

export const AddProjectButton = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleOnSuccess = () => {
    toast.success('Projeto criado com sucesso');
    onClose();
  };

  return (
    <>
      <Button
        size="lg"
        className="w-full"
        startContent={<AiOutlinePlus />}
        onClick={onOpen}
      >
        Create a project
      </Button>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Novo projeto
              </ModalHeader>
              <ModalBody>
                <AddProjectForm onSuccess={handleOnSuccess} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit" form="projectForm">
                  Create project
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
