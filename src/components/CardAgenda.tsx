import { ReactNode } from "react";
import { Text } from "./Text";
import s from "./CardAgenda.module.css";
import { CardPair } from "./CardPair";
import { CardTextBlock } from "./CardTextBlock";
import facehuggerLogo from "../assets/facehugger_logo.png";

type CardAgendaProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export const CardAgenda = ({ title, subtitle, children }: CardAgendaProps) => {
  return (
    <CardPair
      heading="Личная цель"
      vertical
      left={
        <div className={s.block}>
          <img src={facehuggerLogo} className={s.logo} />
          <Text size="4mm" className={s.title}>
            {title}
          </Text>
          {subtitle && <Text size="3mm">{subtitle}</Text>}
        </div>
      }
      right={
        <CardTextBlock>
          <Text>{children}</Text>
        </CardTextBlock>
      }
    ></CardPair>
  );
};
