'use client';

import { TasksListSection } from './components/tasks-list/TasksListSection';
import Track from './components/timer/track/Track';

export default function Home() {
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
}
