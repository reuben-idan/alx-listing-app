import React from "react";
import { CardProps } from "../../interfaces";
import Button from "./Button";

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  price,
  location,
  onAction,
  actionLabel,
}) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden max-w-xs bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">{location}</p>
        <p className="text-gray-800 mb-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-blue-600 font-semibold">{price}</span>
          {actionLabel && (
            <Button onClick={onAction} variant="primary">
              {actionLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
