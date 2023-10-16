import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AddProjectForm } from './components/AddProjectForm/AddProjectForm';

export const AddProjectButton = () => {
  const handleOpenModal = () => {
    console.log('open modal');
  };

  const handleSubmit = () => {
    console.log('form submitted');
  };

  return (
    <>
      <Button
        size="lg"
        className="w-full"
        startContent={<AiOutlinePlus />}
        onPress={handleOpenModal}
      >
        Create a project
      </Button>
      <Modal isOpen={true} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Novo projeto
              </ModalHeader>
              <ModalBody>
                <AddProjectForm />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  form="projectForm"
                  onPress={handleSubmit}
                >
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
