import { Outlet } from "react-router-dom";
import Navbar from "./layouts/header";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="mt-[105px] md:mt-[97px] lg:mt-[120px] ">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
