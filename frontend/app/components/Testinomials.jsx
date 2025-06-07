// components/TestimonialsSection.jsx
'use client';

import Image from 'next/image';

const testimonials = [
  {
    image: '/testimonials/cds.jpg', // replace with your image path
    quote:
      "Attending an Indian wedding was beyond magical! The traditions, the joy, and the warmth of the families made it an unforgettable journey.",
    name: 'Anna Müller',
    subtext: 'Traveler from Germany',
  },
  {
    image: '/testimonials/fbsds.jpg', // replace with your image path
    quote:
      "Hosting international guests gave us so much happiness — they embraced every moment of our wedding rituals and became part of our family.",
    name: 'Rahul and Sneha Kapoor',
    subtext: 'Hosts from Delhi',
  },
  {
    image: '/testimonials/newm.jpg', // replace with your image path
    quote:
      "I never imagined I’d be dancing at a baraat in India! This experience showed me the beauty of Indian culture in such a vibrant way.",
    name: 'Lucas Hernandez',
    subtext: 'Guest from Spain',
  },
  {
    image: '/testimonials/dfhf.jpg', // replace with your image path
    quote:
      "Welcoming travelers to our wedding was heartwarming. We shared stories, traditions, and meals — it truly felt like a global celebration.",
    name: 'Priya Nair',
    subtext: 'Host from Kerala',
  },
];


export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white text-center px-4">
      <h2 className="text-4xl font-bold mb-12 text-[#10325a]">WHAT PEOPLE HAVE SAID</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 px-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
            <p className="text-lg font-medium text-gray-800 max-w-md">&quot;{testimonial.quote}&quot;</p>
            <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
