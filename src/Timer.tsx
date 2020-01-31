import React from 'react';
import styled from "styled-components";
import { TimerDurationObject } from './useTimer';
import {FaPlayCircle, FaPauseCircle, FaUndo} from 'react-icons/fa'

const Card = styled.div`
border-radius: 10px;
background: f5f5f5;
display:inline-flex;
align-items: center;
justify-content: space-around;
padding: 10px 20px
color: #333;
`;
const Time = styled.p`
font-size: 50px;
font-weight: bold;
padding: 0px;
margin: 0px 10px;
width: 225px;
`;

const Flex = styled.div`
display: flex;
align-itemns: center;
`;

type Props = {
    time: TimerDurationObject;
    status: string;
    onPlay: () => void;
    onReset: () => void;
    onPause: () => void;
}

export const Timer: React.FC<Props> = ({time, status, onPlay, onReset, onPause}) => {
 const renderTime = `${time.hours}:${time.minutes}:${time.seconds}`;

    const renderPlayOrPauseButton = 
    status === 'IN_PROGRESS' ?(
        <FaPauseCircle size={50} onClick={onPause}/>
     ): (
        <FaPlayCircle size={50} onClick={onPlay}/>
     )

     return (
         <Card>
             <Time>
                 {renderTime}
             </Time>
             <Flex>
                 <FaUndo size={20} onClick={onReset} style={{marginRight: "18px"}} />
                 {renderPlayOrPauseButton}
             </Flex>
         </Card>
     )
}