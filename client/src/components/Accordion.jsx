import React, { useState } from 'react';
import accorcss from '../styles/accordion.module.scss'; 

const Accordion = (props) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div className={accorcss.accordion}>
      {props.data.map((item, index) => (
        <div key={index} className={`${accorcss['accordion-item']} ${openItems.includes(index) ? accorcss.open : ''}`}>
          <div className={`${accorcss.title} ${accorcss.flexhori}`} onClick={() => toggleItem(index)}>
            {item.title}
            <span>
              {openItems.includes(index) ? <i className="ri-arrow-drop-up-line"></i> : <i className="ri-arrow-drop-down-line"></i>}
            </span>
          </div>
          <div className={accorcss.content}>
            {openItems.includes(index) && item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
