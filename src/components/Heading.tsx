import React from "react";

const Heading = ({
  heading,
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return (
    <div>
      <p className={`text-3xl font-semibold pb-6 ${className} `}>{heading}</p>
    </div>
  );
};

export default Heading;
