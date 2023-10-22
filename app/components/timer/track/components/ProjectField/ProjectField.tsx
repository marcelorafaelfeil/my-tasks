import { Select, SelectItem } from '@nextui-org/react';
import { useContext, useEffect, useState } from 'react';
import { useAllProjects } from '../../hooks/useAllProjects';
import { AddProjectButton } from '../AddProjectButton/AddProjectButton';
import { TrackContext } from '../context/TrackContext';
import { Project } from '../context/types/Project';
import { ListProjectItem } from './components/SelectedProjectItem/ListProjectItem';

type ProjectFieldProps = {
  className?: string;
};

export const ProjectField = ({ className }: ProjectFieldProps) => {
  const projectsList = useAllProjects();
  const [value, setValue] = useState<string[]>([]);
  const context = useContext(TrackContext);
  const { state } = context;

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stringValue: string = e.target.value;
    const value: number = parseInt(stringValue);

    setValue(stringValue ? [stringValue] : []);

    const selectedProject: Project | undefined = projectsList?.find(
      (project) => project.id === value,
    );

    if (selectedProject) {
      context.defineTaskProject(selectedProject);
    }
  };

  useEffect(() => {
    if (state.project && state.project.id) {
      setValue([state.project.id.toString()]);
    } else {
      setValue([]);
    }
  }, [state.project]);

  return (
    <div className={className}>
      {projectsList && projectsList.length > 0 ? (
        <Select
          items={projectsList}
          placeholder="Selecione o projeto"
          size="sm"
          radius="lg"
          aria-label="Selecione o projeto"
          onChange={handleOnChange}
          selectedKeys={value}
          renderValue={(items) =>
            items.map((item) => (
              <ListProjectItem key={item.key} project={item.data as Project} />
            ))
          }
        >
          {(project) => (
            <SelectItem key={project.id!} textValue={project.name}>
              <ListProjectItem project={project} />
            </SelectItem>
          )}
        </Select>
      ) : (
        <AddProjectButton />
      )}
    </div>
  );
};
