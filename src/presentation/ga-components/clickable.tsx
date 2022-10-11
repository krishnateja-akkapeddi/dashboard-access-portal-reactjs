import React from "react";

type Props = {
  onClick: Function;
  children: React.ReactNode;
};

const Clickable: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </div>
  );
};

export default Clickable;
