import { nanoid } from "nanoid";
import anxiety from "../../public/images/anxiety.jpeg";
import feelingnew from "../../public/images/feelingnew.jpeg";
import anxietyyellow from "../../public/images/anxietyyellow.jpeg";
import energy from "../../public/images/energy.jpeg";
import positive from "../../public/images/positive.jpeg";
import sleep from "../../public/images/meditationsleep.jpeg";

let meditation = [
  {
    imgUrl: anxiety,
    videoUrl: "https://www.youtube.com/watch?v=penUy-GhApQ",
    title: "10 Minute Meditation for Anxiety",
  },

  {
    imgUrl: energy,
    videoUrl: "https://www.youtube.com/watch?v=tMc9uxDYGJY",
    title: "Cleanse Your Energy (10 Minute Meditation Guided)",
  },

  {
    imgUrl: sleep,
    videoUrl: "https://www.youtube.com/watch?v=aEqlQvczMJQ",
    title: "10-Minute Meditation For Sleep",
  },

  {
    imgUrl: feelingnew,
    videoUrl: "https://www.youtube.com/watch?v=xE4MYIQ1sCA",
    title: "Feeling Like A Brand New You ~ 10 Minute Guided Meditation",
  },

  {
    imgUrl: anxietyyellow,
    videoUrl: "https://www.youtube.com/watch?v=O-6f5wQXSu8",
    title: "10-Minute Meditation For Anxiety",
  },

  {
    imgUrl: positive,
    videoUrl: "https://www.youtube.com/watch?v=lJKMYBzI9RE",
    title: "10 Minute Positive Energy Meditation",
  },
];

meditation.forEach((e) => {
  e.id = nanoid();
  e.isFavourite = false;
});

export default meditation;
