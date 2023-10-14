'use client';

import JobStartButton from './components/JobStartButton/JobStartButton';
import { TimeField } from './components/TimeField/TimeField';
import TitleField from './components/TitleField/TitleField';
import { AppTrackContext } from './components/context/TrackContext';

export default function Track() {
  return (
    <AppTrackContext>
      <div className="flex gap-3">
        <TitleField />
        <TimeField />
        <JobStartButton />
      </div>
    </AppTrackContext>
  );
}
