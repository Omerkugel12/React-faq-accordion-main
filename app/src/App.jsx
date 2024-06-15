import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
import starIcon from "./assets/images/icon-star.svg";
import { useState } from "react";
import { Header } from "./components/Header";
import { FaqsList } from "./components/FaqsList";

const FAQ = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    body: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    body: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    body: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    body: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

function App() {
  const [selected, setSelected] = useState(null);
  function toggleAccordion(i) {
    if (selected === i) {
      return setSelected(null);
    }
    return setSelected(i);
  }

  return (
    <div className="main-container">
      <Header starIcon={starIcon} />
      <FaqsList
        FAQ={FAQ}
        selected={selected}
        toggleAccordion={toggleAccordion}
        minusIcon={minusIcon}
        plusIcon={plusIcon}
      />
    </div>
  );
}

export default App;
