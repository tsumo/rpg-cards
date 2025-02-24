import { CardBox } from "../../CardBox";
import { Sheet } from "../../Sheet";
import { CronusCrew } from "./CronusCrew";
import { MonteroAgendas } from "./MonteroAgendas";
import { MonteroCrew } from "./MonteroCrew";
import { SotilloCrew } from "./SotilloCrew";

export const ChariotOfTheGods = () => {
  return (
    <>
      <MonteroCrew />
      <MonteroAgendas />
      <CronusCrew />
      <SotilloCrew />
      <Sheet>
        <CardBox title="Колесница богов" thickness={232} />
      </Sheet>
    </>
  );
};
