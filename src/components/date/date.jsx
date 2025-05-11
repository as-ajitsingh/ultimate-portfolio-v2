import React from "react";
import { FiClock } from "react-icons/fi";

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function formatDate(date) {
  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const daySuffix = getDaySuffix(day);

  return `${day}${daySuffix} ${monthNames[monthIndex]} ${year}`;
}

const Date = ({ date }) => {
  return (
    <div className="inline-flex items-center">
      <FiClock className='h5 w-5' />
      <span className="ml-0.5">{formatDate(date)}</span>
    </div>
  );
};

export default Date;
