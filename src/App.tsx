import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./layouts/header";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
