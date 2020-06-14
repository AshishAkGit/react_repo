import React from 'react';
import './App.css';
import ComponentC from './components/context/ComponentC';
// import HookCounterFour from './components/HookCounterFour'
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounter from './components/HookCounter'
// import HookEffectCounter1 from './components/HookEffectCounter1'
// import DataFetchingHookEffect from './components/DataFetchingHookEffect'
// import DataFetchingHookEffect2 from './components/DataFetchingHookEffect2'


export const userContext =React.createContext()
export const channelContext =React.createContext()


function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookEffectCounter1/> */}
      {/* <DataFetchingHookEffect/> */}
      {/* <DataFetchingHookEffect2/> */}
      <userContext.Provider value="Ashish">
        <channelContext.Provider value="CodeEvaluation">
      <ComponentC/>
      </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
