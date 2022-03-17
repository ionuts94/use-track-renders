import { useState } from 'react';
import useTrackRenders from './hooks/use-track-renders';

function App() {
  const [firstStateVar, setFirstStateVar] = useState(false);
  const [secondStateVar, setSecondStateVar] = useState(0);
  const [thirdStateVar, setThirdStateVar] = useState({
    name: "John"
  });

  useTrackRenders([firstStateVar, secondStateVar, thirdStateVar], "App")

  return (
    <div className="App">
      <h1>
        first state var: {firstStateVar}
      </h1>
      <h1>
        second state var: {secondStateVar}
      </h1>
      <h1>
        third state var: {thirdStateVar.name}
      </h1>

      <button onClick={() => setFirstStateVar(!firstStateVar)}>
        toggle first var
      </button>
      <button onClick={() => setSecondStateVar(secondStateVar => secondStateVar+1)}>
        increase second var
      </button>
      <button onClick={() => setThirdStateVar(thirdStateVar => { return { name: thirdStateVar.name + "n"}})}>
        change third var name
      </button>
    </div>
  );
}

export default App;
