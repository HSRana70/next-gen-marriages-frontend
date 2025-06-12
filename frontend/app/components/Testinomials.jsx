'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    image: '/testimonials/cds.jpg',
    quote:
      "Attending an Indian wedding was beyond magical! The traditions, the joy, and the warmth of the families made it an unforgettable journey.",
    name: 'Anna Müller',
    subtext: 'Traveler from Germany',
  },
  {
    image: '/testimonials/fbsds.jpg',
    quote:
      "Hosting international guests gave us so much happiness — they embraced every moment of our wedding rituals and became part of our family.",
    name: 'Rahul and Sneha Kapoor',
    subtext: 'Hosts from Delhi',
  },
  {
    image: '/testimonials/newm.jpg',
    quote:
      "I never imagined I’d be dancing at a baraat in India! This experience showed me the beauty of Indian culture in such a vibrant way.",
    name: 'Lucas Hernandez',
    subtext: 'Guest from Spain',
  },
  {
    image: '/testimonials/dfhf.jpg',
    quote:
      "Welcoming travelers to our wedding was heartwarming. We shared stories, traditions, and meals — it truly felt like a global celebration.",
    name: 'Priya Nair',
    subtext: 'Host from Kerala',
  },
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    
     <section className="py-16 bg-white text-center px-4">
      <h2 className="text-4xl font-bold mb-12 text-[#10325a]">WHAT PEOPLE HAVE SAID</h2>
      <div className="max-w-[1200px] mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
    
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={24}
          loop={true}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            640: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col items-center space-y-4 px-4 py-6 border rounded-xl shadow-md h-full transition-all duration-500 ${
                  activeIndex === index ? ' text-[#45a183] bg-[#f9f9f9]  py-[46px]' : 'bg-[#f9f9f9] mt-[20px]  text-[#10325a]'
                }`}
              >
                <div
                  className={`transition-transform  duration-500 ${
                    activeIndex === index ? 'scale-110  ' : 'scale-100 '
                  }`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={140}
                    height={140}
                    className="rounded-xl object-cover"
                  />
                </div>
                <p className="text-base font-medium max-w-[280px] italic">"{testimonial.quote}"</p>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-sm">{testimonial.subtext}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
