# What is use-track-renders?

use-track-renders is a light weight library that tracks your react component renders and logs in the console why it re-rendered. 
The way this work is we pass variables in our component we want to listen for changes and the library tells us which one changed. This could be used to improve performance of the components as you can pass all sorts of variables including functions and objects.

## Usage

Firstly you will need to import the hook in the component you plan to track renders:
```
eg: import useTrackRenders from 'use-track-renders'
```

Secondly you will need to call the hook. It accepts 2 arguments. First argument is an array which contains props and state variables and the second argument which is a string and represents the name of the component. It returns a string if it was successfully mounted.
```
eg: const mountedTrackRenders = useTrackRenders([stateVar1, stateVar2, props], "component name");
```

## Usage example

We have following component:
```
import { useState } from 'react';
import useTrackRenders from 'use-track-renders';

export const Counter = ({ initCount }) => {
    const [counter, setCounter] = useState(initCount);
    const increaseCounter = () => {
        setCounter(counter => counter + 1);
    }

    const mountedTrackRenders = useTrackRenders(
        [initCount, counter, increaseCounter], // Variables we want to track changes
        'Counter' // Component name
    )

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increaseCounter}>Increase count</button>
        </div>
    )
}
```

