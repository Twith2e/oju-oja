import { TestimonyCard } from "./testimony-card";
import { PiUsersFour } from "react-icons/pi";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <div className="px-24">
      <span className="text-base flex gap-2 items-center font-medium">
        <PiUsersFour color="#3c50e0" size={24} />
        Testimonials
      </span>
      <div className="flex justify-between items-center mt-4">
        <h2 className="home-section-header">User Feedbacks</h2>
        <div className="flex gap-3">
          <button
            className="border border-gray-400 p-2 rounded-md hover:bg-[#3c50e0] hover:text-white transition-colors duration-200 cursor-pointer"
            type="button"
          >
            <GoChevronLeft size={24} />
          </button>
          <button
            className="border border-gray-400 p-2 rounded-md hover:bg-[#3c50e0] hover:text-white transition-colors duration-200 cursor-pointer"
            type="button"
          >
            <GoChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 gap-6 overflow-auto bg-red-600">
        {testimonials.map((testimony) => (
          <TestimonyCard
            image={testimony.image}
            name={testimony.name}
            rating={testimony.rating}
            job={testimony.job}
            key={testimony.id}
            comment={testimony.comment}
          />
        ))}
      </div>
    </div>
  );
}
