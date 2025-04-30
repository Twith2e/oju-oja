import { TestimonyCard } from "./testimony-card";
import { PiUsersFour } from "react-icons/pi";
import { testimonials } from "../../lib/json";

export default function Testimonials() {
  return (
    <div className="px-4 lg:px-10 xl:px-24">
      <span className="text-base flex gap-2 items-center font-medium">
        <PiUsersFour color="#3c50e0" size={24} />
        Testimonials
      </span>
      <div className="flex justify-between items-center mt-4">
        <h2 className="home-section-header">User Feedbacks</h2>
      </div>
      <div className="flex justify-between items-center mt-4 gap-3 overflow-auto">
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
