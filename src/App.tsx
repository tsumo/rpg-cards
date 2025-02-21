import { CronusCrew } from "./components/sheets/CronusCrew";
import { Gear } from "./components/sheets/Gear";
import { MonteroAgendas } from "./components/sheets/MonteroAgendas";
import { MonteroCrew } from "./components/sheets/MonteroCrew";
import { Protection } from "./components/sheets/Protection";
import { SotilloCrew } from "./components/sheets/SotilloCrew";
import { Weapons } from "./components/sheets/Weapons";

/*
TODO
- general abilities tables
*/

export const App = () => {
  return (
    <>
      <Weapons />
      <Protection />
      <Gear />
      <MonteroCrew />
      <MonteroAgendas />
      <CronusCrew />
      <SotilloCrew />
    </>
  );
};

export default App;
