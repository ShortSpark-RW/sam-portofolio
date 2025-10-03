import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Samuel delivered a very professional and accurate translation for our education project. He was fast, reliable, and easy to work with.",
    quote: `The translation quality was exceptional, and Samuel's understanding of cultural nuances made our educational materials much more effective for our target audience. His attention to detail and quick turnaround time were impressive.`,
    name: "Education Project Coordinator",
    designation: "International Education Initiative",
  },
  {
    message:
      "I appreciated Samuel's attention to detail and cultural understanding in his translations. Highly recommended.",
    quote: `Samuel provided excellent translation services for my business documents. His ability to maintain the professional tone while ensuring cultural appropriateness was outstanding. He's become my go-to translator for all my business needs.`,
    name: "Entrepreneur & Small Business Owner",
    designation: "Local Business Owner",
  },
  {
    message:
      "Samuel's work with our nonprofit organization has been invaluable for our communication efforts in Rwanda.",
    quote: `As the Rwanda Representative for Dream 'n Dare Africa, Samuel has provided exceptional translation and communication support. His dedication to helping us connect with local communities has made a significant impact on our mission.`,
    name: "Nonprofit Organization Director",
    designation: "Dream 'n Dare Africa",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
