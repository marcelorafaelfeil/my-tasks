import { Project } from '@/app/core/models/Project';
import { Select, SelectItem } from '@nextui-org/react';
import { AddProjectButton } from '../AddProjectButton/AddProjectButton';
import { ListProjectItem } from './components/SelectedProjectItem/ListProjectItem';

const projects: Project[] = [
  /*   {
    id: 1,
    name: 'Test project 01',
    archived: false,
    billing: true,
    enabled: true,
    createdAt: new Date(),
  } as Project,
  {
    id: 2,
    name: 'Test project 02',
    archived: false,
    billing: false,
    enabled: true,
    createdAt: new Date(),
  } as Project, */
];

type ProjectFieldProps = {
  className?: string;
};

export const ProjectField = ({ className }: ProjectFieldProps) => {
  return (
    <div className={className}>
      {projects.length > 0 ? (
        <Select
          items={projects}
          placeholder="Selecione o projeto"
          size="sm"
          radius="lg"
          aria-label="Selecione o projeto"
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
