"use client";
import Image from "next/image";
import ProductItem from "./ProductItem";
import { useState } from "react";

export default function VipSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className=" w-full max-w-[1440px] flex flex-col items-center justify-center h-max py-[18px] lg:pt-[62px] lg:pb-[52px]">
      <div className="text-black text-center text-base w-full flex flex-row-reverse justify-center lg:justify-start items-center font-bold lg:text-center lg:text-[32px] relative px-[25px]">
        <span className="lg:absolute left-1/2 top-0 lg:-translate-x-1/2  ">
          Полтава: VIP - Оголошення
        </span>
        <button
          type="button"
          className="hidden lg:block pr-5  btn btn-secondary text-white rounded-[7px] px-2.5 py-3.5"
        >
          Дивитись все
        </button>
      </div>

      <div className="overflow-x-auto  h-max">
        <div className="overflow-x-auto py-[20px] lg:py-[40px] grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-max w-max">
          {[
            {
              img: {
                alt: "boots",
                src: "/prodectItems/c0f72915883c8a362be4a027d3295e6a.png",
              },
              label: "Кросівки Adidas Forum low | Адідас Адидас Форум Лов",
              href: "#",
              price: 1599,
              date: "24 червня 2023 р.",
            },
            {
              img: {
                alt: "sewerage",
                src: "/prodectItems/a671b34b1afcd0946e8bd3217dbaae10.png",
              },
              label: "Автономна каналізація Септик",
              href: "#",
              price: 60000,
              date: "24 червня 2023 р.",
            },

            {
              img: {
                alt: "boots",
                src: "/prodectItems/c0f72915883c8a362be4a027d3295e6a.png",
              },
              label: "Кросівки Adidas Forum low | Адідас Адидас Форум Лов",
              href: "#",
              price: 1599,
              date: "24 червня 2023 р.",
            },
            {
              img: {
                alt: "sewerage",
                src: "/prodectItems/a671b34b1afcd0946e8bd3217dbaae10.png",
              },
              label: "Автономна каналізація Септик",
              href: "#",
              price: 60000,
              date: "24 червня 2023 р.",
            },
          ].map((item, key) => {
            return (
              <ProductItem
                key={key}
                date={item.date}
                href={item.href}
                img={item.img}
                label={item.label}
                price={item.price}
              />
            );
          })}
        </div>

        {!open && (
          <div className="lg:hidden flex flex-col gap-[19px] px-[25px] pt-[13px] w-full">
            <button
              type="button"
              className="btn btn-secondary w-full py-[14px] flex flex-row rounded items-center justify-center gap-2"
            >
              <span className="text-white text-base font-bold">
                Дивитись все
              </span>
              <svg
                className="fill-white"
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 0.5C4.5 0.223858 4.27614 0 4 0C3.72386 0 3.5 0.223858 3.5 0.5H4.5ZM3.64645 12.8536C3.84171 13.0488 4.15829 13.0488 4.35355 12.8536L7.53553 9.67157C7.7308 9.47631 7.7308 9.15973 7.53553 8.96447C7.34027 8.7692 7.02369 8.7692 6.82843 8.96447L4 11.7929L1.17157 8.96447C0.976311 8.7692 0.659728 8.7692 0.464466 8.96447C0.269204 9.15973 0.269204 9.47631 0.464466 9.67157L3.64645 12.8536ZM3.5 0.5V12.5H4.5V0.5H3.5Z" />
              </svg>
            </button>
            <span className="text-primary text-center text-xl font-bold">
              Шукай, знаходь, купуй,
              <br /> продавай разом з iBiz
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
