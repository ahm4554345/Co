import React from "react";
import Container from "./Container";
import Title from "./Title";
import DesktopFeature, { FeatureMobile } from "./DesktopFeature";

const Services = () => {
  return (
    <section
      id="services"
      aria-label="services"
      className="bg-gray-900 py-20 sm:py-32 "
    >
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl"></div>
        <Title
          title="Our Services"
          className="text-white text-2xl text-center explore"
        />
      </Container>
      {/* Desktop View */}
      <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
        <DesktopFeature />
      </div>
      {/* Mobile View */}
      <div className="mt-16 md:hidden">
        <FeatureMobile />
      </div>
    </section>
  );
};

export default Services;
