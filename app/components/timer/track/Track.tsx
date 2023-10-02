import JobStartButton from './components/JobStartButton';
import TrackField from './components/TrackField';

export default function Track() {
  return (
    <>
      <div className="flex gap-3">
        <TrackField />
        <JobStartButton />
      </div>
    </>
  );
}
