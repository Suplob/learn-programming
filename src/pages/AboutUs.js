import React from "react";
import learn from "../../src/media/img/learn.png";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-60 mt-32 container mx-auto">
      <div data-aos="fade-right">
        <img src={learn} alt="" className="w-full self-center" />
      </div>
      <div className="self-center" data-aos="fade-left">
        <h1 className="font-bold text-5xl mb-6">Who We Are?</h1>
        <p className="text-gray-500">
          There are many online resource guides for educators interested in
          coding, ranging from basic courses for the rookie coder to curricula
          for teachers who want to integrate computer science principles into
          other subject areas like humanities or art. Below, find a few of the
          best, including resources from Code.org which offers free training for
          teachers from all grade levels, including a national network of
          in-person local workshops.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
