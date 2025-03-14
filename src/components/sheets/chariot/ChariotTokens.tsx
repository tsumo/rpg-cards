import { image } from "../../../utils";
import { Sheet } from "../../Sheet";
import { Token } from "../../Token";

export const ChariotTokens = () => {
  return (
    <Sheet title="Chariot of the Gods - токены">
      <Token
        image={image("montero", "miller")}
        brightness={1.75}
        contrast={2.75}
      />
      <Token
        image={image("montero", "davis")}
        brightness={1.95}
        contrast={2.75}
      />
      <Token image={image("montero", "rye")} brightness={1.7} contrast={3.2} />
      <Token image={image("montero", "cham")} brightness={2} contrast={1.7} />
      <Token
        image={image("montero", "wilson")}
        brightness={2.3}
        contrast={2.7}
      />

      <Token image={image("cronus", "johns")} brightness={1.8} contrast={1.4} />
      <Token image={image("cronus", "reid")} brightness={1.8} contrast={1.4} />
      <Token image={image("cronus", "flynn")} brightness={1.2} contrast={1.4} />
      <Token
        image={image("cronus", "cooper")}
        brightness={1.4}
        contrast={1.4}
      />
      <Token
        image={image("cronus", "clayton")}
        brightness={1.2}
        contrast={1.4}
      />
      <Token image={image("cronus", "ava")} brightness={1.4} contrast={1.4} />

      <Token
        image={image("sotillo", "bolaji")}
        brightness={1.8}
        contrast={1.4}
      />
      <Token image={image("sotillo", "pin")} brightness={1.8} contrast={1.4} />
      <Token image={image("sotillo", "bein")} brightness={1.8} contrast={1.4} />
      <Token
        image={image("sotillo", "horton")}
        brightness={1.8}
        contrast={1.4}
      />
    </Sheet>
  );
};
