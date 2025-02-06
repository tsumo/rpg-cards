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
        left={
          <CardRightImage
            stats={[
              "Качество: +1",
              "Урон: 2",
              "Дистанция: дальняя",
              "Вес: 1",
              "Цена: $1200",
              "Свойства: автоматическое, бронебойное, подствольный гранатомет",
            ]}
            image="/weapons/"
          />
        }
        right={
          <CardTextBlock>
            <Text>
              Оснвное оружие бойцов колониальной морской пехоты. Это 10-мм
              автоматическая винтовка с 30-мм подствольным гранатомётом, прочным
              корпусом и выдвижным прикладом. Кроме того, на неё можно поставить
              оптический прицел. Патроны для М41А это стандартные безгильзовые,
              разрывные и бронебойные US M309. Стреляет при помощи электронных
              импульсов, а остаток боезапаса можно отслеживать с помощью
              светодиодов на корпусе. Из М41А можно стрелять как короткими
              очередями, так и вести автоматический огонь.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Импульсный автомат АК-4047"
        left={
          <CardRightImage
            stats={[
              "Качество: –",
              "Урон: 2",
              "Дистанция: дальняя",
              "Вес: 1",
              "Цена: $500",
              "Свойства: автоматическое",
            ]}
            image="/weapons/"
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
          <CardRightImage
            stats={[
              "Качество: +2",
              "Урон: 2",
              "Дистанция: предельная",
              "Вес: 1",
              "Цена: $1000",
              "Свойства: бронебойное",
            ]}
            image="/weapons/"
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
          <CardRightImage
            stats={[
              "Качество: +2",
              "Урон: 3",
              "Дистанция: ближняя",
              "Вес: 1",
              "Цена: $500",
              "Свойства: низкая пробивная способность",
            ]}
            image="/weapons/"
          />
        }
        right={
          <CardTextBlock>
            <Text>
              Классический боевой дробовик, которым время от времени пользуются
              морпехи. Модель 37. Добрый и надёжный помощник в ближнем бою.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Плазм. имп. винт. «Армат» XM99A"
        headingSize="2.9mm"
        left={
          <CardRightImage
            stats={[
              "Качество: –",
              "Урон: 4",
              "Дистанция: предельная",
              "Вес: 2",
              "Цена: $20000",
              "Свойства: бронебойное, запас электроэнергии 5",
            ]}
            image="/weapons/"
          />
        }
        right={
          <CardTextBlock>
            <Text>
              Прототип, который сейчас проходит испытания в войсках морской
              пехоты. Исключительно мощное оружие, способное уложить на месте с
              одного выстрела как человека, так и большинство инопланетных
              тварей. Однако нужно помнить, что эта винтовка стреляет с
              задержкой – ей нужно время, чтобы накопить плазменную энергию.
              Иными словами, прежде чем выстрелить из этой винтовки, надо
              предпринять быстрое действие и прицелиться. После каждого выстрела
              требуется проходить проверку запаса электроэнергии (см. стр. 34).
              Когда батарея ХМ99А полностью заряжена, её запас электроэнергии
              равен 5.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Гарп. ружье «СпейсСаб» ASSO-400"
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
        left={
          <CardRightImage
            stats={[
              "Качество: +1",
              "Урон: взрыв 9",
              "Дистанция: дальняя",
              "Вес: 1/2",
              "Цена: $600",
              "Свойства: можно использовать разные виды гранат",
            ]}
            image="/weapons/"
          />
        }
        right={
          <CardTextBlock>
            <Text lineHeight={1.1}>
              Самостоятельный вариант подствольного гранатомета винтовки М41А.
              Боезаряды – осколочно-фугасные снаряды М40, дымовые, световые и
              электрошоковые G2. Осколочная граната – взрыв мощностью 9 и ещё
              один дополнительный пункт урона. Взрыв задевает также все другие
              цели в этой области. Дымовая граната не наносит урон, но дым
              окутывает целевую область и ограничивает видимость – снаружи не
              видно, что происходит внутри, а внутри не видно ничего. Вспышка
              световой гранаты – проверка выносливости (свободное действие) или
              потеря следующего стандартного действия. При неудачной атаке
              граната пролетает мимо цели и падает в случайную соседнюю зону.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Тяж. имп. винт. «Армат» M41AE2"
        headingSize="2.9mm"
        left={
          <CardRightImage
            stats={[
              "Качество: +1",
              "Урон: 3",
              "Дистанция: предельная",
              "Вес: 2",
              "Цена: $1500",
              "Свойства: автоматическое, бронебойное",
            ]}
            image="/weapons/"
          />
        }
        right={
          <CardTextBlock>
            <Text>
              Излюбленное оружие огневой поддержки колониальной морской пехоты
              модифицированная винтовка М41А (без подствольного гранатомёта, но
              с сильно удлинённым стволом). Отличный пулемёт при правильном
              использовании не даст врагу и головы поднять. Прикроет твою
              задницу, пока ты бежишь к точке эвакуации.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Смарт-пулемет M56A2"
        left={
          <CardRightImage
            stats={[
              "Качество: +3",
              "Урон: 3",
              "Дистанция: дальняя",
              "Вес: 3",
              "Цена: $6000",
              "Свойства: автоматическое, бронебойное",
            ]}
            image="/weapons/"
          />
        }
        right={
          <CardTextBlock>
            <Text lineHeight={1.1}>
              Крепится к особому держателю, позволяющему пулемёту вращаться на
              360 градусов и стрелять почти в любую сторону. Всю эту конструкцию
              носит на себе один стрелок. Пулемёт М56A2 не зря имеет приставку
              «смарт», или «умный», инфракрасная система наведения и встроенный
              приёмопередатчик позволяют ему самостоятельно целиться в
              противников. Когда враг обнаружен, оружие отправляет информацию о
              нём в нашлемный прицел. Открывать огонь или нет, решает стрелок.
              Из М56А2 можно как стрелять короткими очередями, так и вести
              автоматический огонь. Одиночный выстрел способен оставить человека
              без конечности, а прямая очередь - разорвать его на две не очень
              аккуратные половинки.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Огнемет M420"
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
            image="/weapons/"
          />
        }
        right={
          <CardTextBlock>
            <Text lineHeight={1.1}>
              Poботы-пулемёты на станках-треногах, стоящие по периметру
              охраняемой территории. Во все пулемёты серии UA 571 встроена
              система наведения на основе искусственного интеллекта, реагирующая
              на движение и тепло. Захочешь подойти – проверь, работает ли
              маячок «свой-чужой». На отдельных пулемётах есть система
              продвинутого распознавания, чтобы отличать друзей и врагов по
              нескольким параметрам. Без продвинутых настроек они уничтожают
              всё, что движется и излучает тепло. При активации автоматический
              пулемёт сразу берёт под контроль сектор обстрела. Им можно
              управлять издалека при помощи нашлемного прицела.
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
            image="/weapons/"
          />
        }
        right={
          <CardTextBlock>
            <Text lineHeight={1.1}>
              Эти малышки не зря зовутся «удар по яйцам». Когда гранаты падают в
              область поражения, они сразу взлетают вверх примерно на метр и
              выпускают электрический разряд. Обычно жертва остаётся в живых, но
              разряда хватает, чтобы полностью парализовать её. Удобно кидать в
              недовольную толпу. Если не посчастливилось оказаться на станции,
              которая вот-вот сгинет во чреве газового гиганта, а в спасательном
              челноке осталось лишь одно место, швырни вперёд себя парочку этих
              весёлых девчат, перешагни через тела и задрай шлюз. Когда G2
              взрывается, все люди в области, куда она упала, обязаны пройти
              проверку выносливости с модификатором -2 (свободное действие),
              иначе будут парализованы на 1 раунд.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Атака голыми руками"
        left={
          <CardRightImage
            stats={[
              "качество: —",
              "урон: 1",
              "дистанция: нулевая",
              "свойства: низкая пробивная способность",
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
        left={
          <CardRightImage
            stats={["Качество: +1", "Урон: 1", "Дистанция: нулевая", "Вес: 1"]}
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
        heading="Электрошоковая дубинка"
        left={
          <CardRightImage
            stats={[
              "Качество: +1",
              "Урон: 1",
              "Дистанция: нулевая",
              "Вес: 1/2",
              "Цена: $80",
              "Свойства: запас электроэнергии 5, оглушающее",
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
        left={
          <CardRightImage
            stats={[
              "Класс защиты: 6",
              "Запас воздуха: —",
              "Вес: 1",
              "Цена: $1200",
              "Встроенный коммуникатор",
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
        left={
          <CardRightImage
            stats={[
              "Класс защиты: 5",
              "Запас воздуха: 4",
              "Вес: 2",
              "Цена: $2000",
              "-1 при проверках проворства",
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
              некоторое время в барокамере. Считается тяжёлым предметом.
            </Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Костюм полного жизнеоб. «Эко»"
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
        left={
          <CardRightImage
            stats={[
              "Класс защиты: 3",
              "Запас воздуха: 4",
              "Вес: 1",
              "Цена: $5000",
              "+3 при проверках выживания",
            ]}
            image="/protection/"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Погрузчик P-5000"
        left={
          <CardRightImage
            stats={[
              "Класс защиты: 3",
              "Запас воздуха: –",
              "Вес: –",
              "Цена: $50000",
              "+3 при проверках тяжелой техники и ближнего боя",
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
        headingSize="2.9mm"
        left={
          <CardRightImage
            stats={[
              "Вес: 1",
              "Цена: $9000",
              "Позволяет управлять кораблем удаленно (проверка информатики)",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Магнитофон серии C"
        left={
          <CardRightImage
            stats={[
              "Вес: 1/2",
              "Цена: $50-100",
              "Позволяет записывать и воспроизводить музыку (+1 к проверкам влияния)",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Часы «Самани» серии E"
        left={
          <CardRightImage
            stats={[
              "Вес: 0",
              "Цена: $50",
              "Показывают время, уровень кислорода и внешнего давления (+1 к проверкам выживания)",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Личный передатчик"
        left={
          <CardRightImage
            stats={[
              "Вес: 0",
              "Цена: $100",
              "Отслеживает местоположение и жизненные показатели владельца",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Маячок-идентификатор"
        left={
          <CardRightImage
            stats={[
              "Вес: 0",
              "Цена: $250",
              "Защищает от огня дружественных турелей",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Карта-передатчик"
        left={
          <CardRightImage
            stats={["Вес: 0", "Цена: $50", "Пересылает аудиовизуальные данные"]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Планшет «Сигсон P-DAT»"
        left={
          <CardRightImage
            stats={[
              "Вес: 1/2",
              "Цена: $500",
              "Помогает команде координировать свои действия",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Прибор диагностики"
        left={
          <CardRightImage
            stats={[
              "Вес: 1",
              "Цена: $300",
              "Выявляет неполадки в компьютерных системах (+2 к проверкам информатики)",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Оптический прицел"
        left={
          <CardRightImage
            stats={[
              "Вес: 0",
              "Цена: $60",
              "Увеличивает дистанцию стрельбы на 1 ступень",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Фонарь дальнего света"
        left={
          <CardRightImage
            stats={["Вес: 1/2", "Цена: $45", "Освещает тёмную область"]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Бинокль"
        left={
          <CardRightImage
            stats={[
              "Вес: 1/2",
              "Цена: $100",
              "+2 к проверкам наблюдательности",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Датчик движения M314"
        left={
          <CardRightImage
            stats={[
              "Вес: 1",
              "Цена: $1200",
              "В помещениях засекает движение в рамках дальней дистанции. См. стр. 86.",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Датчик движения M316"
        left={
          <CardRightImage
            stats={[
              "Вес: 0",
              "Цена: $3000",
              "В помещениях засекает движение в рамках средней дистанции. См. стр. 86.",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Нашлемный прицел"
        left={
          <CardRightImage
            stats={[
              "Вес: 1/2",
              "Цена: $200",
              "Позволяет удалённо управлять стационарным пулемётом",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Нейровизор"
        left={
          <CardRightImage
            stats={[
              "Вес: 1",
              "Цена: $10000",
              "Позволяет следить за снами персонажей в гиперсне",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Спектрограф. картограф «пёсик»"
        headingSize="2.9mm"
        left={
          <CardRightImage
            stats={[
              "Вес: 1",
              "Цена: $50000",
              "Сканирует одну область за раунд",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Технический ключ"
        left={
          <CardRightImage
            stats={["Вес: 1", "Цена: $150", "+1 к проверкам тяжелой техники"]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Ремкомплект для электроники"
        headingSize="3mm"
        left={
          <CardRightImage
            stats={["Вес: 1/2", "$250", "+1 к проверкам информатики"]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Личная аптечка"
        left={
          <CardRightImage
            stats={["Вес: 1/4", "Цена: $50", "+2 к проверкам медпомощи"]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Хирургический набор"
        left={
          <CardRightImage
            stats={[
              "Вес: 1/2",
              "Цена: $25-200",
              "+1 к проверкам медпомощи, когда пытаешься спасти кого-нибудь (в том числе себя) от смерти",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Таблетки «Бессонница»"
        left={
          <CardRightImage
            stats={["Вес: 0", "Цена: $2", "+1 к уровню стресса"]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Раствор «Гидрейт»"
        left={
          <CardRightImage
            stats={[
              "Вес: 0",
              "Цена: $5",
              "Устраняет эффекты жажды после гиперсна",
            ]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />

      <CardPair
        heading="Препарат «Напролев»"
        left={
          <CardRightImage
            stats={["Вес: 0", "Цена: $20", "Снижает уровень стресса до нуля"]}
            image="//"
          />
        }
        right={
          <CardTextBlock>
            <Text></Text>
          </CardTextBlock>
        }
      />
    </SheetPartition>
  );
};
