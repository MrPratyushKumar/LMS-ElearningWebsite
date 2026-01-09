import React from "react";

import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";
import CoursesSection from "../../components/student/CoursesSection";
import TestimonialSection from "../../components/student/TestimonialSection";
import CallToAction from "../../components/student/CallToAction";
import Footer from "../../components/student/Footer";

function Home() {
  return (
    <main className="w-full flex flex-col items-center">

      {/* Hero Section */}
      <Hero />

      {/* Trusted Companies */}
      <section className="w-full mt-12">
        <Companies />
      </section>

      {/* Courses */}
      <section className="w-full mt-16">
        <CoursesSection />
      </section>

      {/* Testimonials */}
      <section className="w-full mt-16">
        <TestimonialSection />
      </section>

      {/* Call To Action */}
      <section className="w-full mt-20">
        <CallToAction />
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}

export default Home;
