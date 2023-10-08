'use client';

import JobStartButton from './components/JobStartButton/JobStartButton';
import { TimeField } from './components/TimeField/TimeField';
import TrackField from './components/TrackField/TrackField';
import { AppTrackContext } from './components/context/TrackContext';

export default function Track() {
  return (
    <AppTrackContext>
      <div className="flex gap-3">
        <TrackField />
        <TimeField />
        <JobStartButton />
      </div>
    </AppTrackContext>
  );
}
