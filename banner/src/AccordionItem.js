import { useRef } from "react";
import { Outlet,Link } from "react-router-dom";

const AccordionItem = ({ faq, active, onToggle }) => {
  const { section_title, content } = faq;

  const contentEl = useRef();

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button-dropdown" onClick={onToggle}>
        {section_title}
        <span className="control">{active ? "-" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        {/* <div className="answer">{content}</div> */}

        {content.map(item => (
            // <div className="videos-pre-button">
            //     <HandleModal videos={item.videos} phrase={item.phrase}></HandleModal>
            // </div>
            <div className="sublinks">
              <Link>{item}</Link>
            </div>
            
        ))}
      </div>
    </li>
  );
};

export default AccordionItem;