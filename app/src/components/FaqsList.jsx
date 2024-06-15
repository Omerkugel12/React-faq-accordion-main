import { FaqsItem } from "./FaqsItem";

export function FaqsList(props) {
  return (
    <>
      {props.FAQ.map((faq, index) => (
        <FaqsItem faq={faq} index={index} key={index} FAQ={props.FAQ}
        selected={props.selected}
        toggleAccordion={props.toggleAccordion}
        minusIcon={props.minusIcon}
        plusIcon={props.plusIcon}/>
      ))}
    </>
  );
}
