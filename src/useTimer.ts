import { convertTimeToSeconds, convertTimeToObject} from './helpers'
import { useEffect, useState, useCallback, useRef } from 'react';
type TimerDurationObjectProperty = number | string;

type TimerDurationSeconds = number;

export type TimerDurationObject = {
 hours?: number | string;
 minutes?: number | string;
 seconds?: number | string;
};

type TimerDuration = TimerDurationObject | TimerDurationSeconds;

type TimerStatus = "NOT_STARTED" | "IN_PROGRESS" | "PAUSED";

export function useTimer(duration: TimerDuration) {
    const initialTimeRemaining 
    = typeof duration === "number" ? duration : convertTimeToSeconds(duration);

    const [status, setStatus] = useState<TimerStatus>("NOT_STARTED");
    const [timeRemaining, setTimeRemaining] = useState<TimerDurationSeconds>(initialTimeRemaining);

    const play  = useCallback(() => {
        setStatus("IN_PROGRESS");

    }, [])
    const pause  = useCallback(() => {
        setStatus("PAUSED");
    }, [])
    const reset  = useCallback(() => {
        setStatus("NOT_STARTED");
    }, [])

    const timeRef = useRef<any>(0);

    function clearInt() {
        clearInterval(timeRef.current);
    }


    useEffect (() => {
        
        if (status === 'NOT_STARTED') {
            clearInt();
            setTimeRemaining(initialTimeRemaining);
 
        } else if (status === 'IN_PROGRESS'){
            timeRef.current = setInterval (() => {
                setTimeRemaining((time: number) => {
                    return time - 1;
                });
            }, 1000);
        } else if (status === 'PAUSED') {
            clearInt();
        }
        return () => clearInt();
    }, [initialTimeRemaining, status]);
    const timeInSeconds = timeRemaining;
    const time = convertTimeToObject(timeRemaining);
    const timeLapsed = initialTimeRemaining - timeRemaining;
 return {play,pause,reset, time, timeInSeconds, timeLapsed, status};
}