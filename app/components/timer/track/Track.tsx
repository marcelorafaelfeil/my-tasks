'use client';

import JobStartButton from './components/JobStartButton/JobStartButton';
import { ProjectField } from './components/ProjectField/ProjectField';
import { TimeField } from './components/TimeField/TimeField';
import TitleField from './components/TitleField/TitleField';
import { AppTrackContext } from './components/context/TrackContext';

export default function Track() {
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
