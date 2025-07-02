import React from "react";
import Image from "next/image";
const BentoCard = ({
  title,
  description,
  className,
  image,
}: {
  title: string;
  description: string;
  className?: string;
  image: string;
}) => {
  return (
    <div
      className={`${className} card w-full h-full  border-8 rounded-2xl border-base-300`}
    >
      <figure className="w-full aspect-video">
        <Image
          src={image}
          alt="Shoes"
          width={1000}
          height={1000}
          className="object-cover w-ful h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BentoCard;
