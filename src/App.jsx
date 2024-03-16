import React, { useEffect, useState } from "react";
import MainPost from "./components/Posts/MainPost";
import UseRefMutableVariable from "./components/UseRef/UseRefMutableVariable";
import UseRefDomElements from "./components/UseRef/UseRefDomElements";
import UseReducer1 from "./components/UseReducer/UseReducer1";
// import UseEffectCleaner from "./components/useEffectHooks/UseEffectCleaner";
// import UseEffectWithVariables from "./components/useEffectHooks/UseEffectWithVariables";
// import Counter from "./components/useStateHooks/counterComponent/Counter";
// import GetInput from "./components/useStateHooks/getInput/GetInput";
// import CombineMethod from "./components/useStateHooks/getInput/combineMethod/CombineMethod";
// import UseEffectWithoutDependancy from "./components/useEffectHooks/UseEffectWithoutDependancy"
const App = () => {
  return (
    <>
      <div>
        {/* <h1>This is rendered for the counter component</h1>
        <Counter />
        <br />
        <h1>Thi is rendered for the Input component</h1>
        <GetInput />
        <br />
        <h1>This is rendered from the Combined Method component</h1>
        <CombineMethod/> */}
        {/* <UseEffectWithoutDependancy/> */}
        {/* <UseEffectWithVariables/> */}
        {/* <UseEffectCleaner/> */}
        {/* <MainPost /> */}
        {/* <UseRefMutableVariable/> */}
        {/* <UseRefDomElements/> */}
        <UseReducer1/>
      </div>
    </>
  );
};

export default App;
