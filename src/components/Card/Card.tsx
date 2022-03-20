import React from "react";
import clsx from "clsx";
import { CardProps } from ".";

export const Card: React.FC<CardProps> = ({
  children,
  paddingless,
}): React.ReactElement => {
  return (
    <div
      className={clsx(
        "bg-white border border-gray-200 rounded-md",
        !paddingless && "py-5 sm:px-6 px-4"
      )}
    >
      {children}
    </div>
  );
};

export default Card;
