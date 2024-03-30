"use client";
import { format } from "date-fns";

const DateFormatter = ({ date, options }) => {
  const formattedDate = format(new Date(date), "MMMM,yyyy", options);

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateFormatter;
