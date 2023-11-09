import { TasksListSection } from '../components/TaskListSection';
import { Track } from '../components/Timer/Track';

export const App = () => {
  return (
    <div>
      <div>
        <Track />
      </div>
      <div className="mt-5">
        <TasksListSection />
      </div>
    </div>
  );
};
