import { image } from "../../utils";
import { CardBottomImage } from "../CardBottomImage";
import { CardBox } from "../CardBox";
import { CardPair } from "../CardPair";
import { CardRightImage } from "../CardRightImage";
import { CardTextBlock } from "../CardTextBlock";
import { Sheet } from "../Sheet";
import { SheetPartition } from "../SheetPartition";
import { Text } from "../Text";

export const Weapons = () => {
  return (
    <>
      <SheetPartition title="Оружие" partitionBy={5}>
        <CardPair
          heading="Табельный пистолет M4A3"
          left={
            <CardRightImage
              stats={[
                "Качество: +2",
                "Урон: 1",
                "Дистанция: средняя",
                "Вес: 1/2",
                "Цена: $200",
              ]}
              image={image("weapons", "pistol")}
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
          left={
            <CardRightImage
              stats={[
                "Качество: +1",
                "Урон: 2",
                "Дистанция: средняя",
                "Вес: 1",
                "Цена: $300",
              ]}
              image={image("weapons", "magnum")}
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
              image={image("weapons", "rexim")}
              columns="1fr 1.5fr"
            />
          }
          right={
            <CardTextBlock>
              <Text>
                Миниатюрная версия лазерного сварочного аппарата от
                Weyland-Yutani 2100-2120-х годов, который превратили в оружие.
                По правде говоря, его и раньше использовали как оружие (например
                повстанцы Джей'Хар на Торине Прайме в 2106 году). Компания
                Weyland-Yutani, которая никогда не упускает своего, не дремала
                и, когда война подошла к концу, как следует изучила все
                повстанческие подификации. А затем выпустила собственное оружие
                самозащиты, которое выдает теперь все рабочим на своих кораблях.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Креп. пист. «Ватацуми» DV-303"
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
              image={image("weapons", "watatsumi")}
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
          left={
            <CardBottomImage
              statsLeft={[
                "Качество: +1",
                "Урон: 2",
                "Дистанция: дальняя",
                "Вес: 1",
              ]}
              statsRight={[
                "Цена: $1200",
                "Свойства: автоматическое, бронебойное, подствольный гранатомет",
              ]}
              image={image("weapons", "m4a1")}
            />
          }
          right={
            <CardTextBlock>
              <Text>
                Оснвное оружие бойцов колониальной морской пехоты. Это 10-мм
                автоматическая винтовка с 30-мм подствольным гранатомётом,
                прочным корпусом и выдвижным прикладом. Кроме того, на неё можно
                поставить оптический прицел. Патроны для М41А это стандартные
                безгильзовые, разрывные и бронебойные US M309. Стреляет при
                помощи электронных импульсов, а остаток боезапаса можно
                отслеживать с помощью светодиодов на корпусе. Из М41А можно
                стрелять как короткими очередями, так и вести автоматический
                огонь.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Импульсный автомат АК-4047"
          left={
            <CardBottomImage
              statsLeft={[
                "Качество: –",
                "Урон: 2",
                "Дистанция: дальняя",
                "Вес: 1",
              ]}
              statsRight={["Цена: $500", "Свойства: автоматическое"]}
              image={image("weapons", "ak4047")}
            />
          }
          right={
            <CardTextBlock>
              <Text>
                Собрат старой доброй М41А, который прижился среди солдат Союза.
                Воплощение понятия «дешёво и сердито». Он, конечно, уступает
                винтовке в точности, но зато куда прочней: будет стрелять, даже
                если его предварительно скинут с утёса в какой-нибудь водоём и
                забудут там на месяц другой.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Снайперская винтовка M42A"
          left={
            <CardBottomImage
              statsLeft={[
                "Качество: +2",
                "Урон: 2",
                "Дистанция: предельная",
                "Вес: 1",
              ]}
              statsRight={["Цена: $1000", "Свойства: бронебойное"]}
              image={image("weapons", "m4a2")}
            />
          }
          right={
            <CardTextBlock>
              <Text>
                Излюбленная снайперская винтовка колониальных морпехов. М42A –
                полуавтоматическое электронное оружие, оборудованное складными
                сошками, пламегасителем и настраиваемым прикладом. Если тебе
                повезёт и ты увидишь, что притаилось в дальних тенях, прежде чем
                оно увидит тебя, ты под стрелишь его в одно мгновение.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Помп. ружье «Армат» мод. 37A2"
          headingSize="2.9mm"
          left={
            <CardBottomImage
              statsLeft={[
                "Качество: +2",
                "Урон: 3",
                "Дистанция: ближняя",
                "Вес: 1",
              ]}
              statsRight={[
                "Цена: $500",
                "Свойства: низкая пробивная способность",
              ]}
              image={image("weapons", "37a2")}
            />
          }
          right={
            <CardTextBlock>
              <Text>
                Классический боевой дробовик, которым время от времени
                пользуются морпехи. Модель 37. Добрый и надёжный помощник в
                ближнем бою.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Плазм. имп. винт. «Армат» XM99A"
          headingSize="2.9mm"
          left={
            <CardBottomImage
              statsLeft={[
                "Качество: –",
                "Урон: 4",
                "Дистанция: предельная",
                "Вес: 2",
              ]}
              statsRight={[
                "Цена: $20000",
                "Свойства: бронебойное, запас электроэнергии 5",
              ]}
              image={image("weapons", "xm99a")}
            />
          }
          right={
            <CardTextBlock>
              <Text lineHeight={1.25}>
                Прототип, который сейчас проходит испытания в войсках морской
                пехоты. Исключительно мощное оружие, способное уложить на месте
                с одного выстрела как человека, так и большинство инопланетных
                тварей. Однако нужно помнить, что эта винтовка стреляет с
                задержкой – ей нужно время, чтобы накопить плазменную энергию.
                Иными словами, прежде чем выстрелить из этой винтовки, надо
                предпринять быстрое действие и прицелиться. После каждого
                выстрела требуется проходить проверку запаса электроэнергии (см.
                стр. 34). Когда батарея ХМ99А полностью заряжена, её запас
                электроэнергии равен 5.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Гарп. ружье «СпейсСаб» ASSO-400"
          headingSize="2.9mm"
          left={
            <CardBottomImage
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
              image={image("weapons", "spacesub")}
            />
          }
          right={
            <CardTextBlock>
              <Text>
                Изначально этот инструмент, который служил подспорьем в
                экстренных стыковочных маневрах. Он оборудован захватным крюком
                с тросом и помогает подтягивать к себе предметы, парящие в
                невесомости, или, наоборот, подтягиваться к ним. При выстреле
                крюк цепляется за цель. Если она тяжелей персонажа, тот может
                быстро подползти по тросу (стандартное действие, дистанция
                сокращается со средней до нулевой). Если тяжелей персонаж, то он
                притягивает цель к себе, а если она сопротивляется, то придется
                пройти встречную проверку телосложения.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Гранатомет «Армат» U1"
          left={
            <CardBottomImage
              statsLeft={[
                "Качество: +1",
                "Урон: взрыв 9",
                "Дистанция: дальняя",
                "Вес: 1/2",
              ]}
              statsRight={[
                "Цена: $600",
                "Свойства: можно использовать разные виды гранат",
              ]}
              image={image("weapons", "u1")}
            />
          }
          right={
            <CardTextBlock>
              <Text lineHeight={1.2}>
                Самостоятельный вариант подствольного гранатомета винтовки М41А.
                Боезаряды – осколочно-фугасные снаряды М40, дымовые, световые и
                электрошоковые G2. Осколочная граната – взрыв мощностью 9 и ещё
                один дополнительный пункт урона. Взрыв задевает также все другие
                цели в этой области. Дымовая граната не наносит урон, но дым
                окутывает целевую область и ограничивает видимость – снаружи не
                видно, что происходит внутри, а внутри не видно ничего. Вспышка
                световой гранаты – проверка выносливости (свободное действие)
                или потеря следующего стандартного действия. При неудачной атаке
                граната пролетает мимо цели и падает в случайную соседнюю зону.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Тяж. имп. винт. «Армат» M41AE2"
          headingSize="2.9mm"
          left={
            <CardBottomImage
              statsLeft={[
                "Качество: +1",
                "Урон: 3",
                "Дистанция: предельная",
                "Вес: 2",
              ]}
              statsRight={[
                "Цена: $1500",
                "Свойства: автоматическое, бронебойное",
              ]}
              image={image("weapons", "m41ae2")}
            />
          }
          right={
            <CardTextBlock>
              <Text>
                Излюбленное оружие огневой поддержки колониальной морской пехоты
                модифицированная винтовка М41А (без подствольного гранатомёта,
                но с сильно удлинённым стволом). Отличный пулемёт при правильном
                использовании не даст врагу и головы поднять. Прикроет твою
                задницу, пока ты бежишь к точке эвакуации.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Смарт-пулемет M56A2"
          left={
            <CardBottomImage
              statsLeft={[
                "Качество: +3",
                "Урон: 3",
                "Дистанция: дальняя",
                "Вес: 3",
              ]}
              statsRight={[
                "Цена: $6000",
                "Свойства: автоматическое, бронебойное",
              ]}
              image={image("weapons", "m56a2")}
            />
          }
          right={
            <CardTextBlock>
              <Text lineHeight={1.1}>
                Крепится к особому держателю, позволяющему пулемёту вращаться на
                360 градусов и стрелять почти в любую сторону. Всю эту
                конструкцию носит на себе один стрелок. Пулемёт М56A2 не зря
                имеет приставку «смарт», или «умный», инфракрасная система
                наведения и встроенный приёмопередатчик позволяют ему
                самостоятельно целиться в противников. Когда враг обнаружен,
                оружие отправляет информацию о нём в нашлемный прицел. Открывать
                огонь или нет, решает стрелок. Из М56А2 можно как стрелять
                короткими очередями, так и вести автоматический огонь. Одиночный
                выстрел способен оставить человека без конечности, а прямая
                очередь - разорвать его на две не очень аккуратные половинки.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Огнемет M420"
          left={
            <CardBottomImage
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
              image={image("weapons", "incinerator")}
            />
          }
          right={
            <CardTextBlock>
              <Text>
                В этом огнемете, похожем на карабин, в качестве топлива
                используется нафта — продукт прямой перегонки нефти. Он
                выпускает в цель мощную непрерывную струю пламени. Морская
                пехота часто выдает его боевым группам, однако есть и модели для
                гражданских. Морпехи окрестили его «прожаркой». M240 — неплохое
                резервное оружие для непредвиденных обстоятельств. Например,
                тесного контакта с недружелюбной фауной. Животные боятся огня,
                правда? При успешной атаке любая цель огнемета M240 загорается
                пламенем с интенсивностью 9 (стр. 108).
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Автоматический пулемет UA 571-C"
          headingSize="2.9mm"
          left={
            <CardRightImage
              stats={[
                "Качество: +2",
                "Урон: 4",
                "Дистанция: предельная",
                "Вес: –",
                "Цена: $12000",
                "Свойства: автоматическое, бронебойное, дистанционный бой 8",
              ]}
              image={image("weapons", "ua571c")}
            />
          }
          right={
            <CardTextBlock>
              <Text lineHeight={1.25}>
                Poботы-пулемёты на станках-треногах, стоящие по периметру
                охраняемой территории. Во все пулемёты серии UA 571 встроена
                система наведения на основе искусственного интеллекта,
                реагирующая на движение и тепло. Захочешь подойти – проверь,
                работает ли маячок «свой-чужой». На отдельных пулемётах есть
                система продвинутого распознавания, чтобы отличать друзей и
                врагов по нескольким параметрам. Без продвинутых настроек они
                уничтожают всё, что движется и излучает тепло. При активации
                автоматический пулемёт сразу берёт под контроль сектор обстрела.
                Им можно управлять издалека при помощи нашлемного прицела.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Шоковые гранаты G2"
          left={
            <CardRightImage
              stats={[
                "Качество: –",
                "Урон: оглушение",
                "Дистанция: средняя",
                "Вес: 1/1",
                "Цена: $400",
                "Свойства: оглушающее, при встречной проверке действует модификатор -2",
              ]}
              image={image("weapons", "g2")}
            />
          }
          right={
            <CardTextBlock>
              <Text lineHeight={1.1}>
                Эти малышки не зря зовутся «удар по яйцам». Когда гранаты падают
                в область поражения, они сразу взлетают вверх примерно на метр и
                выпускают электрический разряд. Обычно жертва остаётся в живых,
                но разряда хватает, чтобы полностью парализовать её. Удобно
                кидать в недовольную толпу. Если не посчастливилось оказаться на
                станции, которая вот-вот сгинет во чреве газового гиганта, а в
                спасательном челноке осталось лишь одно место, швырни вперёд
                себя парочку этих весёлых девчат, перешагни через тела и задрай
                шлюз. Когда G2 взрывается, все люди в области, куда она упала,
                обязаны пройти проверку выносливости с модификатором -2
                (свободное действие), иначе будут парализованы на 1 раунд.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Атака голыми руками"
          left={
            <CardRightImage
              stats={[
                "Качество: —",
                "Урон: 1",
                "Дистанция: нулевая",
                "Свойства: низкая пробивная способность",
              ]}
              image={image("weapons", "fist")}
            />
          }
          right={
            <CardTextBlock>
              <Text lineHeight={1.2}>
                <p>
                  Если герой безоружен, то защищаться он может лишь от таких же
                  безоружных персонажей — причем только от людей.
                </p>
                <p>Общие правила ближнего боя:</p>
                <p>
                  Для атаки противник должен находиться на нулевой дистанции.
                  Для того чтобы вытащить оружие понадобится быстрое действие.
                  Чтобы атаковать врага в ближнем бою, персонаж должен твердо
                  стоять на ногах. Если он лежит, ему придется сначала встать
                  (быстрое действие). До тех пор пока он не встанет, все
                  противники на ногах получают модификатор + 2 к проверкам
                  ближнего боя, направленным против него.
                </p>
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Тупой предмет"
          left={
            <CardRightImage
              stats={[
                "Качество: +1",
                "Урон: 1",
                "Дистанция: нулевая",
                "Вес: 1",
              ]}
              image={image("weapons", "blunt")}
            />
          }
          right={
            <CardTextBlock>
              <Text>
                <p>Общие правила ближнего боя:</p>
                <p>
                  Для атаки противник должен находиться на нулевой дистанции.
                  Для того чтобы вытащить оружие понадобится быстрое действие.
                  Чтобы атаковать врага в ближнем бою, персонаж должен твердо
                  стоять на ногах. Если он лежит, ему придется сначала встать
                  (быстрое действие). До тех пор пока он не встанет, все
                  противники на ногах получают модификатор + 2 к проверкам
                  ближнего боя, направленным против него.
                </p>
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Нож"
          left={
            <CardRightImage
              stats={[
                "Качество: –",
                "Урон: 2",
                "Дистанция: нулевая",
                "Вес: 1/2",
                "Цена: $50",
              ]}
              image={image("weapons", "knife")}
            />
          }
          right={
            <CardTextBlock>
              <Text>
                <p>Общие правила ближнего боя:</p>
                <p>
                  Для атаки противник должен находиться на нулевой дистанции.
                  Для того чтобы вытащить оружие понадобится быстрое действие.
                  Чтобы атаковать врага в ближнем бою, персонаж должен твердо
                  стоять на ногах. Если он лежит, ему придется сначала встать
                  (быстрое действие). До тех пор пока он не встанет, все
                  противники на ногах получают модификатор + 2 к проверкам
                  ближнего боя, направленным против него.
                </p>
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Электрошоковая дубинка"
          left={
            <CardBottomImage
              statsLeft={[
                "Качество: +1",
                "Урон: 1",
                "Дистанция: нулевая",
                "Вес: 1/2",
              ]}
              statsRight={[
                "Цена: $80",
                "Свойства: запас электроэнергии 5, оглушающее",
              ]}
              image={image("weapons", "prod")}
            />
          }
          right={
            <CardTextBlock>
              <Text lineHeight={1.25}>
                Это не столько оружие, сколько пастушье орудие. Эти дубинки
                разрабатывали специально для Фронтира, чтобы управлять скотом и
                отгонять вредителей. Её заряда не хватит, чтобы прикончить
                человека, но хватит, чтобы полностью его обездвижить. При
                успешной атаке электрошоковой дубинкой цель, которая получила
                хотя бы 1 пункт урона, должна немедленно пройти проверку
                ВЫНОСЛИВОСТИ (свободное действие), иначе окажется парализованной
                на 1 раунд. После каждой атаки нужно пройти проверку запаса
                электроэнергии. Когда батарея дубинки полностью заряжена, её
                запас электроэнергии равен 5.
              </Text>
            </CardTextBlock>
          }
        />

        <CardPair
          heading="Резак"
          left={
            <CardRightImage
              stats={[
                "Качество: –",
                "Урон: 3",
                "Дистанция: нулевая",
                "Вес: 1",
                "Цена: $300",
                "Свойства: бронебойное, запас электроэнергии 5",
                "+2 к проверкам тяжелой техники",
              ]}
              image={image("weapons", "torch")}
              brightness={2.5}
              contrast={1.8}
            />
          }
          right={
            <CardTextBlock>
              <Text>
                Горелка, которую часто используют для сварки и резки металла. В
                крайних случаях сгодится как оружие. Если вспомнить пистолет
                «Рексим» EVA, то и он начинал свой путь как резак, только
                лазерный. Голь на выдумки хитра, особенно когда хочет выжить.
                После каждой атаки нужно пройти проверку запаса электроэнергии.
                Когда батарея резака полностью заряжена, её запас электроэнергии
                равен 5.
              </Text>
            </CardTextBlock>
          }
        />
      </SheetPartition>

      <Sheet>
        <CardBox title="Оружие" thickness={180} />
      </Sheet>
    </>
  );
};
