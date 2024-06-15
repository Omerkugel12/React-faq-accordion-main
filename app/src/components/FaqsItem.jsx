export function FaqsItem(props) {
    return (
        <div className="item-wrapper" key={props.index}>
          <button
            className="accordion-item"
            onClick={() => props.toggleAccordion(props.index)}
          >
            <h5>{props.faq.title}</h5>
            <div className="icons-item">
              {props.selected === props.index ? (
                <img className="minus-icon" src={props.minusIcon} alt="Collapse" />
              ) : (
                <img className="plus-icon" src={props.plusIcon} alt="Expand" />
              )}
            </div>
          </button>
          <div>
            <p className={props.selected === props.index ? 'active' : 'accordion-description'}>
              {props.faq.body}
            </p>
          </div>
        </div>
    )
}