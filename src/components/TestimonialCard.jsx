"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialCard({ testimonials }) {
  return (
    <section className="my-8 dark:bg-gray-300 dark:text-gray-800">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto sm:flex-row lg:flex-nowrap lg:justify-evenly lg:px-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 1700,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials?.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col  max-w-sm mx-4 my-6 shadow-lg ">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                  <blockquote className="relative text-xl text-gray-500 dark:text-gray-400 px-6 py-1 italic text-center">
                    <q className=" font-medium">{testimonial?.review}</q>
                  </blockquote>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                  <img
                    src={testimonial?.image?.url}
                    alt={testimonial?.name}
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 "
                  />
                  <p className="text-xl font-semibold leading-tight">
                    {testimonial?.name}
                  </p>
                  <p className="text-sm uppercase">{testimonial?.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
