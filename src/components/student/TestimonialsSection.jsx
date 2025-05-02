import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialSection = () => {
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-xl md:text-4xl font-semibold text-purple-800">
        Testimonials
      </h2>
      <p className="md:text-base text-gray-600 mt-3">
        Discover how our services have made a difference for our clients. Their
        feedback speaks for itself.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 px-5 md:px-0 gap-4 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-purple-300/10">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h1>
                <p className="text-gray-800/80">{testimonial.role}</p>
              </div>
            </div>

            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestimonialSection;
