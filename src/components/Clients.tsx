import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { testimonials } from "@/Data";

const Clients = () => {
  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Clients;
