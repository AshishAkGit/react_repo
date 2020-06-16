import React from 'react';
import './App.css';
// import CounterThreeReducer from './components/reducers/CounterThreeReducer'
import AppParent from './components/reducers/AppParent';
// import CounterTwoReducer from './components/reducers/CounterTwoReducer';
// import FRParentInput from './components/refs/FRParentInput';
// import RefsDemo from './components/refs/RefsDemo';
// import FocusInput from './components/refs/FocusInput';
// import MouseClickCounter from './components/hoc/MouseClickCounter';
// import MouseHoverCounter from './components/hoc/MouseHoverCounter'
// import ComponentC from './components/context/ComponentC';
// import HookCounterFour from './components/HookCounterFour'
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounter from './components/HookCounter'
// import HookEffectCounter1 from './components/HookEffectCounter1'
// import DataFetchingHookEffect from './components/DataFetchingHookEffect'
// import DataFetchingHookEffect2 from './components/DataFetchingHookEffect2'
// import ClickCounterTwo from './components/renderprops/ClickCounterTwo'
// import HoverCounterTwo from './components/renderprops/HoverCounterTwo'
// import Counter from './components/renderprops/Counter';
// import DocTitleOne from './components/customhook/DocTitleOne'
// import DocTitleTwo from './components/customhook/DocTitleTwo'
// import CounterOne from './components/customhook/CounterOne';
// import CounterTwo from './components/customhook/CounterTwo';
// import CounterOneReducer from './components/reducers/CounterOneReducer'

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
      {/* <userContext.Provider value="Ashish">
        <channelContext.Provider value="CodeEvaluation">
      <ComponentC/>
      </channelContext.Provider>
      </userContext.Provider> */}
      {/* <MouseClickCounter name="Ashish"/>
      <MouseHoverCounter/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/> */}
      {/* <Counter 
            render={(count,incrementCount)=>(
              <ClickCounterTwo count={count} incrementCount={incrementCount}/>
            )}
            />
             <Counter 
            render={(count,incrementCount)=>(
              <HoverCounterTwo count={count} incrementCount={incrementCount}/>
            )}
            /> */}
            {/* <RefsDemo/> */}
            {/* <FocusInput/> */}
            {/* <FRParentInput/> */}
            {/* <DocTitleOne/>
            <DocTitleTwo/> */}
            {/* <CounterOne/>
            <CounterTwo/> */}
            {/* <CounterOneReducer/> */}
            {/* <CounterTwoReducer/> */}
            {/* <CounterThreeReducer/> */}
            <AppParent/>
    </div>
  );
}

export default App;
