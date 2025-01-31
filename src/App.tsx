import { useEffect } from "react";
import { Equipment } from "./components/sheets/Equipment";
import { MonteroCrew } from "./components/sheets/MonteroCrew";

export const App = () => {
  useEffect(() => {
    document.body.classList.add("A4");
  }, []);

  return (
    <>
      <Equipment />
      <MonteroCrew />
    </>
  );
};

export default App;
