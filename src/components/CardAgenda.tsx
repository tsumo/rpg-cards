import { Text } from "./Text";
import s from "./CardAgenda.module.css";

type CardAgendaProps = {
  text: string;
};

export const CardAgenda = ({ text }: CardAgendaProps) => {
  return (
    <div className={s.block}>
      <img src="/facehugger_logo.png" className={s.logo} />
      <Text size="4mm">{text}</Text>
    </div>
  );
};
