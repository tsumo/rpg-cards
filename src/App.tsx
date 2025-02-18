import { CronusCrew } from "./components/sheets/CronusCrew";
import { Equipment } from "./components/sheets/Equipment";
import { MonteroAgendas } from "./components/sheets/MonteroAgendas";
import { MonteroCrew } from "./components/sheets/MonteroCrew";
import { SotilloCrew } from "./components/sheets/SotilloCrew";

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
