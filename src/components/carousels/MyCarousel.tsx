"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useState } from "react";

interface CarouselProps {
  children: Array<ReactNode>;
  //className?:string|undefined;
}

export default function MyCarousel({ children }: CarouselProps) {
  const [active, setActive] = useState(1);

  const goTo = (key: number) => {
    setActive(key);
  };

  const items = children.map((value, key) => {
    return (
      <>
        <div
          onClick={() => goTo(key)}
          data-active={active == key}
          className={cn(
            "h-[312px] w-[608px] scale-50 hover:scale-100 rounded duration-700 ease-in-out data-[active=true]:scale-100",
            key < active - 1 && "hidden",
            key > active + 1 && "hidden"
          )}
          key={`corusel${key}`}
        >
          {value}
        </div>
      </>
    );
  });

  const indicators = children.map((value, key) => {
    return (
      <>
        <button
          onClick={() => goTo(key)}
          data-active={active == key}
          className="p-1 w-1 h-1 hover:p-2 hover:bg-gray-400 bg-gray-700 rounded-full duration-200 data-[active=true]:p-2  data-[active=true]:bg-gray-400"
          key={key}
        />
      </>
    );
  });

  return (
    <>
      <span>
        {active + 1}/{React.Children.count(children)}
      </span>
      <div className="h-[348px] w-full flex flex-col relative justify-between items-center bg-slate-600">
        <div
          id="content"
          className="h-min w-full flex flex-row relative justify-center items-center overflow-hidden border-2 border-black"
        >
          {items}
        </div>
        <ul
          id="indicators"
          className="flex flex-row bg-blue-600 h-[36px] w-full text-center gap-1 justify-center items-center"
        >
          {indicators}
        </ul>
      </div>
    </>
  );
}
