import { ChariotOfTheGods } from "./components/sheets/chariot/ChariotOfTheGods";
import { Gear } from "./components/sheets/Gear";
import { Protection } from "./components/sheets/Protection";
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
      <ChariotOfTheGods />
    </>
  );
};

export default App;
