import React from 'react';
 
interface Props {
  onClick: () => void;
  children:any
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
