import React from "react";
import { MdOutlineTrackChanges } from "react-icons/md";

const ReadTime = ({ readTime }) => {
  const readTimeUnit = readTime < 2 ? "min" : "mins";
  return (
    <div className="inline-flex items-center">
      <MdOutlineTrackChanges className="w-5 h-5" />
      <span className="ml-0.5">
        {readTime} {readTimeUnit}
      </span>
    </div>
  );
};

export default ReadTime;
