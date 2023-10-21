import { Button } from '@nextui-org/react';
import { AiOutlinePlus } from 'react-icons/ai';

export const AddProjectButton = () => {
  /* const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    console.log('open modal');
  };

  const handleLoadingOnSave = () => {
    setIsLoading(true);
  };

  const handleFinishOnSave = () => {
    setIsLoading(false);
  };

  const handleSubmit = () => {
    console.log('form submitted');
  }; */

  return (
    <>
      <Button size="lg" className="w-full" startContent={<AiOutlinePlus />}>
        Create a project
      </Button>
      {/* <Modal isOpen={true} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Novo projeto
              </ModalHeader>
              <ModalBody>
                <AddProjectForm
                  onLoading={handleLoadingOnSave}
                  onFinish={handleFinishOnSave}
                />
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
      </Modal> */}
    </>
  );
};
