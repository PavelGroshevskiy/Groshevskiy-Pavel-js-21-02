import React, { ReactNode, SyntheticEvent, useState } from 'react';
import './Popup.scss';

interface Props {
  children: ReactNode;
  comment: string;
}

const Popup = ({ children, comment }: Props) => {
  const [hovered, setHovered] = useState(false);

  const mouseOver = (e: SyntheticEvent) => {
    setHovered(true);
    e.stopPropagation();
  };

  const mouseOut = (e: SyntheticEvent) => {
    setHovered(false);
    e.stopPropagation();
  };

  return (
    <div className="component-with-helper" onMouseOut={mouseOut} onMouseOver={mouseOver}>
      {hovered && <div className="component-with-helper__helper">{comment}</div>}
      {children}
    </div>
  );
};

export default Popup;
