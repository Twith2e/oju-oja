import { TestimonyCard } from "./testimony-card";

export default function Testimonials() {
  return (
    <div className="px-24">
      <TestimonyCard
        image="/iMac.webp"
        name="John Doe"
        rating={5}
        job="Backend Developer"
        comment="jhjwjkdwll"
      />
    </div>
  );
}
