import { Card } from "../Card";
import { CardSideBySide } from "../CardSideBySide";
import { CardStack } from "../CardStack";
import { CardTextBlock } from "../CardTextBlock";
import { SheetPartition } from "../SheetPartition";
import { Text } from "../Text";

export const Equipment = () => {
  return (
    <SheetPartition n={10}>
      <Card heading="Табельный пистолет M4A3" headingWidth={510}>
        <CardSideBySide
          stats={[
            "Качество: +2",
            "Урон: 1",
            "Дистанция: средняя",
            "Вес: 1/2",
            "Цена: $200",
          ]}
          image="/weapons/pistol.png"
          columns="1fr 2fr"
        />
      </Card>
      <Card heading="Табельный пистолет M4A3" headingWidth={510}>
        <CardTextBlock>
          <Text>
            Недорогой 9-мм пистолет — любимое оружие морпехов. Туз в рукаве
            никогда не будет лишним, и табельный пистолет отлично годится на эту
            роль.
          </Text>
        </CardTextBlock>
      </Card>

      <Card heading="Револьвер «Магнум 357»" headingWidth={490}>
        <CardSideBySide
          stats={[
            "Качество: +1",
            "Урон: 2",
            "Дистанция: средняя",
            "Вес: 1",
            "Цена: $300",
          ]}
          image="/weapons/magnum.png"
          columns="1fr 2fr"
        />
      </Card>
      <Card heading="Револьвер «Магнум 357»" headingWidth={490}>
        <CardTextBlock>
          <Text>
            Настоящая классика среди крупнокалиберных револьверов, которую
            уважают во всем Фронтире. Он снискал немалую популярность как у
            колониальных маршалов, так и у простых смертных.
          </Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Лаз. пист. «Рексим» EVA RXF-M5"
        headingWidth={620}
        headingSize="2.9mm"
      >
        <CardSideBySide
          stats={[
            "Качество: +1",
            "Урон: 1",
            "Дистанция: средняя",
            "Вес: 1/2",
            "Цена: $400",
            "Свойства: бронебойное",
          ]}
          image="/weapons/rexim.png"
          columns="1fr 1.5fr"
        />
      </Card>
      <Card
        heading="Лаз. пист. «Рексим» EVA RXF-M5"
        headingWidth={620}
        headingSize="2.9mm"
      >
        <CardTextBlock>
          <Text>
            Миниатюрная версия лазерного сварочного аппарата от Weyland-Yutani
            2100-2120-х годов, который превратили в оружие. По правде говоря,
            его и раньше использовали как оружие (например повстанцы Джей'Хар на
            Торине Прайме в 2106 году). Компания Weyland-Yutani, которая никогда
            не упускает своего, не дремала и, когда война подошла к концу, как
            следует изучила все повстанческие подификации. А затем выпустила
            собственное оружие самозащиты, которое выдает теперь все рабочим на
            своих кораблях.
          </Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Креп. пист. «Ватацуми» DV-303"
        headingWidth={610}
        headingSize="2.9mm"
      >
        <CardSideBySide
          stats={[
            "Качество: —",
            "Урон: 3",
            "Дистанция: ближняя",
            "Вес: 1",
            "Цена: $400",
            "Свойства: бронебойное, однозарядное",
            "+2 к проверкам тяжелой техники",
          ]}
          image="/weapons/watatsumi.png"
          columns="1fr 1.5fr"
        />
      </Card>
      <Card
        heading="Креп. пист. «Ватацуми» DV-303"
        headingWidth={610}
        headingSize="2.9mm"
      >
        <CardTextBlock>
          <Text>
            DV-303 — это строительный инструмент, который выстреливает
            крепежными болтами. Используется в экстренных случаях, чтобы чинить
            обшивку кораблей. Также сгодится как импровизированное оружие —
            правда, выпускает всего один болт за раз, как однозарядный дробовик.
            С такими пистолетами ходили повстанцы в ранних 2100-х. Требует
            перезарядки после каждого выстрела (стандартное действие).
          </Text>
        </CardTextBlock>
      </Card>

      <Card heading="Имп. винтовка «Армат» M41A" headingWidth={580}>
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Импульсный автомат АК-4047" headingWidth={580}>
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Снайперская винтовка M42A" headingWidth={555}>
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Помп. ружье «Армат» мод. 37A2"
        headingWidth={605}
        headingSize="2.9mm"
      >
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Плазм. имп. винт. «Армат» XM99A"
        headingWidth={640}
        headingSize="2.9mm"
      >
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Гарп. ружье «СпейсСаб» ASSO-400"
        headingWidth={645}
        headingSize="2.9mm"
      >
        <CardStack
          statsLeft={["Качество: —", "Урон: 1", "Дистанция: средняя", "Вес: 1"]}
          statsRight={[
            "Цена: $300",
            "Свойства: низкая пробивная способность, однозарядное",
          ]}
          image="/weapons/spacesub.png"
        />
      </Card>
      <Card
        heading="Гарп. ружье «СпейсСаб» ASSO-400"
        headingWidth={645}
        headingSize="2.9mm"
      >
        <CardTextBlock>
          <Text>
            Изначально этот инструмент, который служил подспорьем в экстренных
            стыковочных маневрах. Он оборудован захватным крюком с тросом и
            помогает подтягивать к себе предметы, парящие в невесомости, или,
            наоборот, подтягиваться к ним. При выстреле крюк цепляется за цель.
            Если она тяжелей персонажа, тот может быстро подползти по тросу
            (стандартное действие, дистанция сокращается со средней до нулевой).
            Если тяжелей персонаж, то он притягивает цель к себе, а если она
            сопротивляется, то придется пройти встречную проверку телосложения.
          </Text>
        </CardTextBlock>
      </Card>

      <Card heading="Гранатомет «Армат» U1" headingWidth={470}>
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Тяж. имп. винт. «Армат» M41AE2"
        headingWidth={620}
        headingSize="2.9mm"
      >
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Смарт-пулемет M56A2" headingWidth={420}>
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Огнемет M420" headingWidth={265}>
        <CardStack
          statsLeft={["Качество: —", "Урон: 2", "Дистанция: средняя", "Вес: 1"]}
          statsRight={[
            "Цена: $500",
            "Свойства: источник огня с интенсивностью 9",
          ]}
          image="/weapons/incinerator.png"
        />
      </Card>
      <Card heading="Огнемет M420" headingWidth={265}>
        <CardTextBlock>
          <Text>
            В этом огнемете, похожем на карабин, в качестве топлива используется
            нафта — продукт прямой перегонки нефти. Он выпускает в цель мощную
            непрерывную струю пламени. Морская пехота часто выдает его боевым
            группам, однако есть и модели для гражданских. Морпехи окрестили его
            «прожаркой». M240 — неплохое резервное оружие для непредвиденных
            обстоятельств. Например, тесного контакта с недружелюбной фауной.
            Животные боятся огня, правда? При успешной атаке любая цель огнемета
            M240 загорается пламенем с интенсивностью 9 (стр. 108).
          </Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Автоматический пулемет UA 571-C"
        headingWidth={640}
        headingSize="2.9mm"
      >
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Шоковые гранаты G2" headingWidth={400}>
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Атака голыми руками" headingWidth={420}>
        <CardSideBySide
          stats={[
            "Качество: —",
            "Урон: 1",
            "Дистанция: нулевая",
            "Вес: —",
            "Цена: —",
            "Свойства: низкая пробивная способность",
          ]}
          image="/weapons/fist.png"
        />
      </Card>
      <Card heading="Атака голыми руками" headingWidth={420}>
        <CardTextBlock>
          <Text>
            <p>
              Если герой безоружен, то защищаться он может лишь от таких же
              безоружных персонажей — причем только от людей.
            </p>
            <p>Общие правила ближнего боя:</p>
            <p>
              Для атаки противник должен находиться на нулевой дистанции. Для
              того чтобы вытащить оружие понадобится быстрое действие. Чтобы
              атаковать врага в ближнем бою, персонаж должен твердо стоять на
              ногах. Если он лежит, ему придется сначала встать (быстрое
              действие). До тех пор пока он не встанет, все противники на ногах
              получают модификатор + 2 к проверкам ближнего боя, направленным
              против него.
            </p>
          </Text>
        </CardTextBlock>
      </Card>

      <Card heading="Тупой предмет" headingWidth={290}>
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Нож" headingWidth={70}>
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Электрошоковая дубинка" headingWidth={490}>
        <CardSideBySide stats={[]} image="/weapons/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Резак" headingWidth={110}>
        <CardSideBySide
          stats={["+2 к проверкам тяжелой техники", "Запас электроэнергии: 5"]}
          image="/weapons/"
        />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Военный бронежилет M3" headingWidth={470}>
        <CardSideBySide stats={[]} image="/protection/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Скафандр IRC Mk.50" headingWidth={400}>
        <CardSideBySide stats={[]} image="/protection/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Скафандр IRC Mk.35" headingWidth={400}>
        <CardSideBySide stats={[]} image="/protection/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Костюм полного жизнеоб. «Эко»"
        headingWidth={600}
        headingSize="2.9mm"
      >
        <CardSideBySide stats={[]} image="/protection/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="APE-костюм Weyland-Yutani" headingWidth={555}>
        <CardSideBySide stats={[]} image="/protection/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Погрузчик P-5000" headingWidth={360}>
        <CardSideBySide stats={[]} image="/protection/" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Порт. терминал связи PR-PUT"
        headingWidth={570}
        headingSize="2.9mm"
      >
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Магнитофон серии C" headingWidth={400}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Часы «Самани» серии E" headingWidth={470}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Личный передатчик" headingWidth={380}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Маячок-идентификатор" headingWidth={445}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Карта-передатчик" headingWidth={360}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Планшет «Сигсон P-DAT»" headingWidth={495}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Прибор диагностики" headingWidth={400}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Оптический прицел" headingWidth={380}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Фонарь дальнего света" headingWidth={475}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Бинокль" headingWidth={160}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Датчик движения M314" headingWidth={450}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Датчик движения M316" headingWidth={450}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Нашлемный прицел" headingWidth={360}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Нейровизор" headingWidth={220}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Спектрограф. картограф «пёсик»"
        headingWidth={625}
        headingSize="2.9mm"
      >
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Технический ключ" headingWidth={360}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card
        heading="Ремкомплект для электроники"
        headingWidth={590}
        headingSize="3mm"
      >
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Личная аптечка" headingWidth={315}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Хирургический набор" headingWidth={430}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Таблетки «Бессонница»" headingWidth={470}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Раствор «Гидрейт»" headingWidth={380}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>

      <Card heading="Препарат «Напролев»" headingWidth={425}>
        <CardSideBySide stats={[]} image="//" />
      </Card>
      <Card heading="" headingWidth={500}>
        <CardTextBlock>
          <Text></Text>
        </CardTextBlock>
      </Card>
    </SheetPartition>
  );
};
