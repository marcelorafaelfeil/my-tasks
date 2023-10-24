import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/react';
import { format } from 'date-fns';
import { useAllFinishedTasks } from '../../hooks/useAllTasks';
import { TaskListOptions } from './components/TaskListOptions/TaskListOptions';
import { GroupedTasks } from './types/GroupedTasks';
import { Task } from './types/Task';

export const TaskList = () => {
  const allFinishedTasksList: GroupedTasks[] = useAllFinishedTasks()!;

  return (
    <>
      <Listbox variant="flat" aria-label="Tasks list">
        {allFinishedTasksList &&
          allFinishedTasksList.map((section: GroupedTasks) => (
            <ListboxSection
              key={section.key}
              title={format(section.date, 'dd/MM/yyyy')}
            >
              {section.items &&
                section.items.map((item: Task) => (
                  <ListboxItem
                    key={`task-${item.id}`}
                    endContent={<TaskListOptions />}
                    textValue={item.title}
                  >
                    {item.title}
                  </ListboxItem>
                ))}
            </ListboxSection>
          ))}
      </Listbox>
    </>
  );
};
