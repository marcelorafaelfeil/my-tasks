import JobStartButton from './components/JobStartButton';
import { ProjectField } from './components/ProjectField';
import { TimeField } from './components/TimeField';
import TitleField from './components/TitleField';
import { AppTrackContext } from './context/TrackContext';

export const Track = () => {
  return (
    <AppTrackContext>
      <div className="flex gap-3">
        <TitleField />
        <ProjectField className="w-80" />
        <TimeField />
        <JobStartButton />
      </div>
    </AppTrackContext>
  );
}
