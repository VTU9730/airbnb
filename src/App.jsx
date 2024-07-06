import Filter from "./Filter";
import Navbar from "./Navbar";
import Search from "./Search";
import Houses from "./Houses";
import { appContext } from "./Context";
import { useContext, useState } from "react";

const App=()=> {
  const state = useContext(appContext)
   const [appState, setAppState] = useState(state)
  return (
    <appContext.Provider value={{appState, setAppState}}>
      <div>
        <Navbar />
        <Search />
        <Filter />
        <Houses appState={appState}/>
      </div>
    </appContext.Provider>
  );
}

export default App;
