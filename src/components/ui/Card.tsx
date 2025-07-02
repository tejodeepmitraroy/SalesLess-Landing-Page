import Image from "next/image";
import React from "react";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`${className} card w-full h-full  border-8 rounded-2xl border-base-300`}
    >
      {children}
    </div>
  );
};

export const CardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={`${className} card-body`}>{children}</div>;
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <h3 className={`${className} card-title`}>{children}</h3>;
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <p className={`${className} card-description`}>{children}</p>;
};

export const CardImage = ({
  className,
  src,
}: {
  className?: string;
  src: string;
}) => {
  return (
    <figure className={`${className} card-image`}>
      <Image src={src} alt="" width={1000} height={1000} />
    </figure>
  );
};
