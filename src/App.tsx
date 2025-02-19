import { CronusCrew } from "./components/sheets/CronusCrew";
import { Equipment } from "./components/sheets/Equipment";
import { MonteroAgendas } from "./components/sheets/MonteroAgendas";
import { MonteroCrew } from "./components/sheets/MonteroCrew";
import { SotilloCrew } from "./components/sheets/SotilloCrew";

/*
TODO
- general abilities tables
- card box generator
*/

export const App = () => {
  return (
    <>
      <Equipment />
      <MonteroCrew />
      <MonteroAgendas />
      <CronusCrew />
      <SotilloCrew />
    </>
  );
};

export default App;
