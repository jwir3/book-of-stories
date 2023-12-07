import { ChapterWithGraphic } from "./ChapterWithGraphic";

export default {
  title: "Components/ChapterWithGraphic",
  component: ChapterWithGraphic,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const StarWarsEpisodeIV = {
  args: {
    number: 4,
    title: "A New Hope",
    image: "anh-banner.png",
    paragraphs: [
      "A long time ago, in a galaxy far, far away. It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      "During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.",
      "Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...",
      "The Old Republic was the Republic of legend, greater than distance or time. No need to note where it was or whence it came, only to know that... it was the Republic.",
    ],
  },
};
