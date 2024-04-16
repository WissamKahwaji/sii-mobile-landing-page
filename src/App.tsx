import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./layouts/header";
import { useEffect } from "react";
import WhatsAppButton from "./components/ui/WhatsAppButton";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Navbar />

      <main className="mt-[89px] md:mt-[97px] lg:mt-[117px] ">
        <Outlet />
        <WhatsAppButton number={"+971545615757"} />
      </main>
    </div>
  );
}

export default App;
