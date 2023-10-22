import { newProject } from '@/app/services/ProjectService';
import { Input, Switch } from '@nextui-org/react';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineFolder } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { NumericFormat } from 'react-number-format';
import { Project } from '../../../context/types/Project';

type AddProjectFormProps = {
  onLoading?: () => void;
  onFinish?: () => void;
  onSuccess?: (project: Project) => void;
};

export const AddProjectForm = ({
  onLoading,
  onFinish,
  onSuccess,
}: AddProjectFormProps) => {
  const [projectName, setProjectName] = useState('');
  const [billing, setBilling] = useState(false);
  const [hourPrice, setHourPrice] = useState<number | undefined>(0.0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [projectNameError, setProjectNameError] = useState<string | null>('');
  const [hourPriceError, setHourPriceError] = useState<string | null>('');

  const isFormValid = useCallback(() => {
    const isHourPriceValid = (billing && hourPrice) || !billing;

    const isValid = projectName && isHourPriceValid;
    setProjectNameError(!projectName ? 'Project name is mandatory.' : null);
    setHourPriceError(!isHourPriceValid ? 'Hour price is mandatory.' : null);

    return isValid;
  }, [projectName, hourPrice, billing]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onLoading) {
      onLoading();
    }

    setIsSubmitted(true);

    if (isFormValid()) {
      newProject(projectName, billing, hourPrice).then(
        (savedProject: Project | undefined) => {
          clearForm();
          if (onFinish) {
            onFinish();
          }
          if (onSuccess) {
            onSuccess(savedProject!);
          }
        },
      );
      return;
    }

    if (onFinish) {
      onFinish();
    }
  };

  const clearForm = () => {
    setProjectName('');
    setBilling(false);
    setHourPrice(0.0);
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (isSubmitted) {
      isFormValid();
    }
  }, [projectName, hourPrice, isSubmitted, isFormValid]);

  return (
    <form
      id="projectForm"
      onSubmit={handleSubmit}
      className="flex flex-1 flex-col gap-3 py-2"
      noValidate
    >
      <Input
        autoFocus
        isRequired
        endContent={<AiOutlineFolder />}
        label="Name"
        placeholder="Type de project's name"
        variant="bordered"
        type="text"
        aria-label="Project's name"
        data-1p-ignore
        value={projectName}
        onValueChange={setProjectName}
        isInvalid={isSubmitted && !!projectNameError}
        errorMessage={projectNameError}
      />
      <div>
        <Switch isSelected={billing} onValueChange={setBilling} defaultSelected>
          Billing
        </Switch>
      </div>
      {billing && (
        <NumericFormat
          isRequired
          value={hourPrice}
          customInput={Input}
          thousandSeparator=","
          decimalScale={2}
          decimalSeparator="."
          onValueChange={(v) => setHourPrice(v.floatValue || undefined)}
          variant="bordered"
          aria-label="Hour price"
          label="Hour price"
          placeholder="Type your hour price"
          endContent={<BiDollar />}
          isInvalid={isSubmitted && !!hourPriceError}
          errorMessage={hourPriceError}
        />
      )}
    </form>
  );
};
