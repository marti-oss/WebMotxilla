import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Team from "./pages/team/Team";
import NewMonitor from "./pages/new/NewMonitor";
import NewNen from "./pages/new/NewNen";
import NewEquip from "./pages/new/NewEquip";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="nen">
                <Route index element={<List/>}/>
                <Route path=":nenId" element={<Single/>}>
                </Route>
                <Route path="new" element={<NewNen/>}/>
              </Route>
              <Route path="monitor">
                <Route index element={<List/>}/>
                <Route path=":monitorId" element={<Single/>}/>
                <Route path="new" element={<NewMonitor/>}/>
              </Route>
              <Route path="equip">
                <Route index element={<List/>}/>
                <Route path=":equipId" element={<Team/>}/>
                <Route path="new" element={<NewEquip/>}/>
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
