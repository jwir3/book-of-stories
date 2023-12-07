import { ShortStory } from "./ShortStory";

export default {
  title: "Fiction/Short Stories",
  component: ShortStory,
  parameters: {
    layout: "left",
  },
  tags: [""],
  argTypes: {},
};

export const AStrangeOccurrence = {
  args: {
    title: "A Strange Occurrence",
    paragraphs: [
      "There was a time when I was not quite as mentally stable as I am now. In fact, it could be said I was quite unstable. The reality, of course, was that I didn't believe myself to be either stable or unstable. I didn't actually give the stability of my mind any thought, which, as I have found out, isn't decidedly normal.",
      'Each person, I believe, actually exists in two worlds: the world of their mind, or "inner" self, and that of the physical world, or their "outer" self. The outermost self is really just a projection of one\'s inner self, and, for the most part, people can determine the state of one\'s inner self through this projection, as they are usually connected. With me, however, this was not the case. My inner self was completely disconnected from the projection that was created displaying my outer self.',
    ],
  },
};
