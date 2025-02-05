import { CardPair } from "../CardPair";
import { CardRightImage } from "../CardRightImage";
import { CardTopImage } from "../CardTopImage";
import { CardTextBlock } from "../CardTextBlock";
import { SheetPartition } from "../SheetPartition";
import { Text } from "../Text";

export const Equipment = () => {
  return (
    <SheetPartition n={5}>
      <CardPair
        heading="Табельный пистолет M4A3"
        headingWidth={510}
        left={
          <CardRightImage
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
        }
        right={
          <CardTextBlock>
            <Text>
              Недорогой 9-мм пистолет — любимое оружие морпехов. Туз в рукаве
              никогда не будет лишним, и табельный пистолет отлично годится на
              эту роль.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Револьвер «Магнум 357»"
        headingWidth={490}
        left={
          <CardRightImage
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
        }
        right={
          <CardTextBlock>
            <Text>
              Настоящая классика среди крупнокалиберных револьверов, которую
              уважают во всем Фронтире. Он снискал немалую популярность как у
              колониальных маршалов, так и у простых смертных.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Лаз. пист. «Рексим» EVA RXF-M5"
        headingWidth={620}
        headingSize="2.9mm"
        left={
          <CardRightImage
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
        }
        right={
          <CardTextBlock>
            <Text>
              Миниатюрная версия лазерного сварочного аппарата от Weyland-Yutani
              2100-2120-х годов, который превратили в оружие. По правде говоря,
              его и раньше использовали как оружие (например повстанцы Джей'Хар
              на Торине Прайме в 2106 году). Компания Weyland-Yutani, которая
              никогда не упускает своего, не дремала и, когда война подошла к
              концу, как следует изучила все повстанческие подификации. А затем
              выпустила собственное оружие самозащиты, которое выдает теперь все
              рабочим на своих кораблях.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Креп. пист. «Ватацуми» DV-303"
        headingWidth={610}
        headingSize="2.9mm"
        left={
          <CardRightImage
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
        }
        right={
          <CardTextBlock>
            <Text>
              DV-303 — это строительный инструмент, который выстреливает
              крепежными болтами. Используется в экстренных случаях, чтобы
              чинить обшивку кораблей. Также сгодится как импровизированное
              оружие — правда, выпускает всего один болт за раз, как
              однозарядный дробовик. С такими пистолетами ходили повстанцы в
              ранних 2100-х. Требует перезарядки после каждого выстрела
              (стандартное действие).
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Имп. винтовка «Армат» M41A"
        headingWidth={580}
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Импульсный автомат АК-4047"
        headingWidth={580}
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Снайперская винтовка M42A"
        headingWidth={555}
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Помп. ружье «Армат» мод. 37A2"
        headingWidth={605}
        headingSize="2.9mm"
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Плазм. имп. винт. «Армат» XM99A"
        headingWidth={640}
        headingSize="2.9mm"
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Гарп. ружье «СпейсСаб» ASSO-400"
        headingWidth={645}
        headingSize="2.9mm"
        left={
          <CardTopImage
            statsLeft={[
              "Качество: —",
              "Урон: 1",
              "Дистанция: средняя",
              "Вес: 1",
            ]}
            statsRight={[
              "Цена: $300",
              "Свойства: низкая пробивная способность, однозарядное",
            ]}
            image="/weapons/spacesub.png"
          />
        }
        right={
          <CardTextBlock>
            <Text>
              Изначально этот инструмент, который служил подспорьем в экстренных
              стыковочных маневрах. Он оборудован захватным крюком с тросом и
              помогает подтягивать к себе предметы, парящие в невесомости, или,
              наоборот, подтягиваться к ним. При выстреле крюк цепляется за
              цель. Если она тяжелей персонажа, тот может быстро подползти по
              тросу (стандартное действие, дистанция сокращается со средней до
              нулевой). Если тяжелей персонаж, то он притягивает цель к себе, а
              если она сопротивляется, то придется пройти встречную проверку
              телосложения.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Гранатомет «Армат» U1"
        headingWidth={470}
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Тяж. имп. винт. «Армат» M41AE2"
        headingWidth={620}
        headingSize="2.9mm"
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Смарт-пулемет M56A2"
        headingWidth={420}
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Огнемет M420"
        headingWidth={265}
        left={
          <CardTopImage
            statsLeft={[
              "Качество: —",
              "Урон: 2",
              "Дистанция: средняя",
              "Вес: 1",
            ]}
            statsRight={[
              "Цена: $500",
              "Свойства: источник огня с интенсивностью 9",
            ]}
            image="/weapons/incinerator.png"
          />
        }
        right={
          <CardTextBlock>
            <Text>
              В этом огнемете, похожем на карабин, в качестве топлива
              используется нафта — продукт прямой перегонки нефти. Он выпускает
              в цель мощную непрерывную струю пламени. Морская пехота часто
              выдает его боевым группам, однако есть и модели для гражданских.
              Морпехи окрестили его «прожаркой». M240 — неплохое резервное
              оружие для непредвиденных обстоятельств. Например, тесного
              контакта с недружелюбной фауной. Животные боятся огня, правда? При
              успешной атаке любая цель огнемета M240 загорается пламенем с
              интенсивностью 9 (стр. 108).
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Автоматический пулемет UA 571-C"
        headingWidth={640}
        headingSize="2.9mm"
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Шоковые гранаты G2"
        headingWidth={400}
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Атака голыми руками"
        headingWidth={420}
        left={
          <CardRightImage
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
        }
        right={
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
                действие). До тех пор пока он не встанет, все противники на
                ногах получают модификатор + 2 к проверкам ближнего боя,
                направленным против него.
              </p>
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Тупой предмет"
        headingWidth={290}
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Нож"
        headingWidth={70}
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Электрошоковая дубинка"
        headingWidth={490}
        left={<CardRightImage stats={[]} image="/weapons/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Резак"
        headingWidth={110}
        left={
          <CardRightImage
            stats={[
              "+2 к проверкам тяжелой техники",
              "Запас электроэнергии: 5",
            ]}
            image="/weapons/"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Военный бронежилет M3"
        headingWidth={470}
        left={
          <CardRightImage
            stats={[
              "Класс защиты: 6",
              "Запас воздуха: —",
              "Вес: 1",
              "Цена: $1200",
              "Свойства: встроенный коммуникатор",
            ]}
            image="/protection/m3.png"
            brightness={1.5}
            contrast={2.1}
          />
        }
        right={
          <CardTextBlock>
            <Text>
              Типичная броня морских пехотинцев. Прочный бронежилет, передняя
              часть которого закрыта мягкой противопульной подушкой. В комплект
              входят защитные пластины на ноги. М3 способен защитить от
              холодного оружия и снарядов большой мощности, главное — избегать
              прямых попаданий. В него встроен коммуникатор, а также личный
              передатчик, множество ремней, на которые можно цеплять снаряжение,
              и контактные датчики, отслеживающие показатели жизненно важных
              функций носителя и передающие их на станцию контроля.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Скафандр IRC Mk.50"
        headingWidth={400}
        left={
          <CardRightImage
            stats={[
              "Класс защиты: 2",
              "Запас воздуха: 5",
              "Вес: 1",
              "Цена: $15000",
            ]}
            image="/protection/mk50.png"
            brightness={1.7}
            contrast={1.3}
          />
        }
        right={
          <CardTextBlock>
            <Text>
              Этот скафандр в ходу вот уже 60 с лишним лет. Когда он только
              появился на рынке, его заслуженно называли произведением
              искусства. Сейчас он встречается разве что на Фронтире, зато там
              уж практически повсюду. В шлем встроен коммуникатор, дисплей,
              фонарик, а его беспроводную камеру можно синхронизировать с любой
              мобильной или стационарной станцией наблюдения. Скафандр содержит
              необходимый запас кислорода и сохраняет давление, когда его
              носитель оказывается в открытом космосе.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Скафандр IRC Mk.35"
        headingWidth={400}
        left={
          <CardRightImage
            stats={[
              "Класс защиты: 5",
              "Запас воздуха: 4",
              "Вес: 2",
              "Цена: $2000",
              "Свойства: -1 при проверках проворства",
            ]}
            image="/protection/mk35.png"
          />
        }
        right={
          <CardTextBlock>
            <Text>
              Стандартное снаряжение морских пехотинцев. К сожалению, этот
              скафандр отличается немаленькими габаритами, а ещё в него встроен
              довольно-таки громоздкий очиститель воздуха. В бою с ним надо
              поаккуратней: при резких движениях его суставы порой заклинивает.
              Мк.35 – довольно недорогой скафандр. В космосе он человека
              защитит, но когда тот доберётся до шлюза, то не сможет сразу же
              зайти внутрь корабля или станции, а должен будет провести
              некоторое время в барокамере. Короче, скафандр – отстой, но если
              выбирать между ним и дружелюбием космической пустоты, то лучше
              заткнуться и натянуть «спасательный жилет». Считается тяжёлым
              предметом.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Костюм полного жизнеоб. «Эко»"
        headingWidth={600}
        headingSize="2.9mm"
        left={
          <CardRightImage
            stats={[
              "Класс защиты: 4",
              "Запас воздуха: 6",
              "Вес: 2",
              "Цена: $30000",
            ]}
            image="/protection/eco.png"
            brightness={0.8}
            contrast={1.8}
          />
        }
        right={
          <CardTextBlock>
            <Text>
              Массивный роботизированный костюм с подвижными сочленениями и
              механическими пальцами. Двигаться в нём неудобно, но зато он в
              полной мере защищает носителя от всех космических угроз. В шлем
              встроен высокотехнологичный дисплей, а в сам костюм небольшие
              маневровые двигатели для полётов в невесомости. Коммуникаторы в
              костюмах «Эко» обычно не экранированы и часто ловят посторонние
              сигналы. Считается тяжелым предметом.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="APE-костюм Weyland-Yutani"
        headingWidth={555}
        left={<CardRightImage stats={[]} image="/protection/" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Погрузчик P-5000"
        headingWidth={360}
        left={
          <CardRightImage
            stats={[
              "Класс защиты: 3",
              "Запас воздуха: –",
              "Вес: –",
              "Цена: $50000",
              "Свойства: +3 при проверках тяжелой техники и ближнего боя",
            ]}
            image="/protection/p5000.png"
            brightness={1.2}
            contrast={1}
          />
        }
        right={
          <CardTextBlock>
            <Text>
              Механизированный экзоскелет, с помощью которого рабочие переносят
              грузы, сваривают металл и ремонтируют корабли и станции. Сила его
              в 10 раз превосходит человеческую, а гидравлическими клешнями на
              концах «рук» можно хватать контейнеры и не только. Защитный каркас
              закрывает лицо, а ремни безопасности спасут пилота от травм, если
              эта штука споткнётся и рухнет. Показатель урона в ближнем бою
              равен 3. Чтобы персонаж мог им воспользоваться, значение его
              навыка тяжёлой техники должно равняться как минимум 2.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Порт. терминал связи PR-PUT"
        headingWidth={570}
        headingSize="2.9mm"
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Магнитофон серии C"
        headingWidth={400}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Часы «Самани» серии E"
        headingWidth={470}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Личный передатчик"
        headingWidth={380}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Маячок-идентификатор"
        headingWidth={445}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Карта-передатчик"
        headingWidth={360}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Планшет «Сигсон P-DAT»"
        headingWidth={495}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Прибор диагностики"
        headingWidth={400}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Оптический прицел"
        headingWidth={380}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Фонарь дальнего света"
        headingWidth={475}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Бинокль"
        headingWidth={160}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Датчик движения M314"
        headingWidth={450}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Датчик движения M316"
        headingWidth={450}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Нашлемный прицел"
        headingWidth={360}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Нейровизор"
        headingWidth={220}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Спектрограф. картограф «пёсик»"
        headingWidth={625}
        headingSize="2.9mm"
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Технический ключ"
        headingWidth={360}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Ремкомплект для электроники"
        headingWidth={590}
        headingSize="3mm"
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Личная аптечка"
        headingWidth={315}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Хирургический набор"
        headingWidth={430}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Таблетки «Бессонница»"
        headingWidth={470}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Раствор «Гидрейт»"
        headingWidth={380}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Препарат «Напролев»"
        headingWidth={425}
        left={<CardRightImage stats={[]} image="//" />}
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />
    </SheetPartition>
  );
};
