import { Project } from '../../../../context/types/Project';

type ListProjectItemProps = {
  project: Project;
};

export const ListProjectItem = ({ project }: ListProjectItemProps) => {
  return (
    <div className="flex gap-2 items-center" aria-label={project.name}>
      <div
        className="project-color w-5 h-5 rounded-full"
        style={{ backgroundColor: project.color || '#CCCCCC' }}
      ></div>
      <div className="flex flex-col">
        <span className="text-small">{project.name}</span>
        <span className="text-tiny text-default-400"></span>
      </div>
    </div>
  );
};
