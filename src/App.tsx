import { CardBox } from "./components/CardBox";
import { Sheet } from "./components/Sheet";
import { CronusCrew } from "./components/sheets/CronusCrew";
import { Equipment } from "./components/sheets/Equipment";
import { MonteroAgendas } from "./components/sheets/MonteroAgendas";
import { MonteroCrew } from "./components/sheets/MonteroCrew";
import { SotilloCrew } from "./components/sheets/SotilloCrew";

/*
TODO
- general abilities tables
*/

export const App = () => {
  return (
    <>
      <Equipment />
      <MonteroCrew />
      <MonteroAgendas />
      <CronusCrew />
      <SotilloCrew />
      <Sheet>
        <CardBox thickness={200} />
      </Sheet>
    </>
  );
};

export default App;
