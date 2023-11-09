import { Input } from '@nextui-org/react';
import { addSeconds, differenceInSeconds, format } from 'date-fns';
import { useCallback, useContext, useEffect, useState } from 'react';
import { TrackContext } from '../../context/TrackContext';
import './style.css';


export const TimeField = () => {
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(new Date(0, 0, 0, 0, 0, 0));
  const trackContext = useContext(TrackContext);

  const calculateTime = useCallback((initialSeconds?: number) => {
    setTimer((timer) => addSeconds(timer, initialSeconds || 1));
  }, []);

  useEffect(() => {
    let interval: number;

    if (trackContext.state?.startTime) {
      const secondsUntilNow: number = differenceInSeconds(
        new Date(),
        trackContext.state.startTime!,
      );
      calculateTime(secondsUntilNow);
      interval = setInterval(() => {
        calculateTime();
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
        setTimer(new Date(0, 0, 0, 0, 0, 0));
      }
    };
  }, [trackContext.state.startTime, calculateTime]);

  useEffect(() => {
    setValue(format(timer, 'HH:mm:ss'));
  }, [timer]);

  return (
    <>
      <Input
        size={'sm'}
        type={'text'}
        value={value}
        className={`w-100 timer tracking-tightest`}
        style={{ textAlign: 'center', letterSpacing: '-1px' }}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        placeholder="00:00:00"
      />
    </>
  );
};
