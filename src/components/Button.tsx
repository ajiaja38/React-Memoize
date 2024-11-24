import React, { memo } from "react";

interface buttonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<buttonProps> = ({ label, onClick }): JSX.Element => {
  console.log("Button Re Render");

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-400 hover:bg-blue-500 active:bg-blue-400 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
};

export default memo(Button);
