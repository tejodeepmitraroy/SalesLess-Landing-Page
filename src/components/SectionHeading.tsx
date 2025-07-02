import React from "react";

const SectionHeading = ({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="w-full h-fit flex mb-16 flex-col items-center justify-center">
      <div className="text-primary">{badge}</div>
      <section className=" w-full max-w-5xl mx-auto text-center flex flex-col">
        <h2 className="text-5xl font-bold leading-14">{title}</h2>
        <p className="text-lg font-medium leading-relaxed">{description}</p>
      </section>
    </section>
  );
};

export default SectionHeading;
