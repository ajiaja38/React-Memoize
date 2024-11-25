import React, { memo } from "react";

interface props {
  onChange: (text: string) => void;
}

const SearchField: React.FC<props> = ({ onChange }) => {
  console.log("SearchField Re Render...");

  return (
    <input
      type="text"
      placeholder="Search"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};

export default memo(SearchField);
