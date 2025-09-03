import React from 'react';
import {getHours} from 'date-fns';

import PrimeCalculator from './PrimeCalculator';
import Clock from './Clock';
import Box from './Box';
import MegaBoost from './MegaBoost';

function App2() {
    const time = useTime();
    const backgroundColor = getBackgroundColorFromTime(time);

    const [name, setName] = React.useState('');
    const [boxWidth, setBoxWidth] = React.useState(1);

    const id = React.useId();

    const boxes = React.useMemo(() => {
        return [
            { flex: boxWidth, background: 'hsl(345deg 100% 50%)'},
            { flex: 3, background: 'hsl(260deg 100% 40%)'},
            { flex: 1, background: 'hsl(50deg 100% 60%)'},
        ];
    }, [boxWidth]);

    const [count, setCount] = React.useState(0);

    const handleMegaBoost = React.useCallback(function handleMegaBoost() {
        setCount(
            (currentCount) => currentCount + 1000
        );
    }, []);

    return (
        <div>
            <h1>Dive into useMemo & useCallback</h1>
            <h2>Example PrimeCalculator</h2>
            <div style={{backgroundColor}}>
                
                <Clock time={time}/>
                <PrimeCalculator />
            </div>
            <h2>Example Boxes</h2>
            <div>
                <Box boxes={boxes} />
                <section>
                    <div className="row">
                        <label htmlFor={`${id}-name`}>
                            Name:
                        </label>
                        <input
                            id={`${id}-name`}
                            type="text"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor={`${id}-box-width`}>
                            First box width:
                        </label>
                        <input 
                            id={`${id}-box-width`}
                            type="range" 
                            min={1} 
                            max={10} 
                            step={0.1}
                            value={boxWidth} 
                            onChange={(event) => {
                                setBoxWidth(event.target.value);
                            }}
                        />
                    </div>
                </section>
            </div>
            <h2>Example MegaBoost</h2>
            <div>
                Count: {count}
                <button
                    onClick={
                        () => setCount(
                                (currentCount) => currentCount + 1
                            )
                    }>
                    Click me!
                </button>
                <MegaBoost
                    handleClick={handleMegaBoost}
                />
            </div>
        </div>
    );
}
function getBackgroundColorFromTime(time) {
    const hours = getHours(time);
    if (hours >= 6 && hours < 12) {
        return "#FFFAE3"; // Morning - Light Yellow
    }
    else if (hours >= 12 && hours < 18) {
        return "#E3F2FF"; // Afternoon - Light Blue
    }
    else if (hours >= 18 && hours < 21) {
        return "#FFF1E3"; // Evening - Light Orange
    }
    else {
        return "#2C3E50"; // Night - Dark Blue
    }
}

function useTime() {
    const [time, setTime] = React.useState(new Date());
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);       
    
        return () => window.clearInterval(interval);
    }, []);

    return time;
}

export default App2;