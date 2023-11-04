import React from "react";
import Container from "./Container";
import Title from "./Title";
import ReviewGrid from "./ReviewGrid";

const Partners = () => {
  return (
    <section
      id="partners"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <Title
          title="Our Great Partners."
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        />
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Over the years they have been journey partners..
        </p>
        <ReviewGrid />
      </Container>
    </section>
  );
};

export default Partners;
