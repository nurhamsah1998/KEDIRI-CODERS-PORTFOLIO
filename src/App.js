import { BrowserRouter } from "react-router-dom";
import Routes from "./router";
import Drawer from "./Drawer/Drawer";

function App() {
  return (
    <BrowserRouter>
      <Drawer>
        <Routes />
      </Drawer>
    </BrowserRouter>
  );
}

export default App;
