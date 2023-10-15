import { Input, Switch } from '@nextui-org/react';
import { useState } from 'react';
import { AiOutlineFolder } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';

export const AddProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [billing, setBilling] = useState(false);
  const [hourPrice, setHourPrice] = useState('0');

  const handleSubmit = () => {
    console.log('submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3 py-2">
      <Input
        autoFocus
        endContent={<AiOutlineFolder />}
        label="Name"
        placeholder="Type de project's name"
        variant="bordered"
        type="text"
        aria-label="Project's name"
        data-1p-ignore
        value={projectName}
        onValueChange={setProjectName}
      />
      <div>
        <Switch isSelected={billing} onValueChange={setBilling} defaultSelected>
          Billing
        </Switch>
      </div>
      {billing && (
        <Input
          autoFocus
          endContent={<BiDollar />}
          className="no-spin"
          label="Hour price"
          variant="bordered"
          type="number"
          aria-label="Project's name"
          data-1p-ignore
          onValueChange={(v) => setHourPrice(v)}
          value={hourPrice}
        />
      )}
    </form>
  );
};
