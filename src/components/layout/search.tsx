"use client";
import { useState } from "react";
import { MarkSvg, SearchSvg } from "../svgs";
import { cn } from "@/lib/utils";

interface SeacrhProp {
  itemsCount: number;
}

export default function Search({ itemsCount }: SeacrhProp) {
  const [overlay, setOverlay] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [location, setLocation] = useState(2);
  const lacationArr = [
    {
      id: 1,
      lacal: "Вся Україна",
    },
    {
      id: 2,
      lacal: "Полтава, Полтавська обл.",
    },
  ];

  return (
    <>
      <form
        action="#"
        className={cn(
          "w-full px-[23px] max-w-[1440px] lg:px-[100px] my-4 lg:my-[54px]",
          overlay ? "z-20" : "z-0"
        )}
      >
        <search className="border border-primary min-w-[343px] w-full rounded-md text-stone-500 text-sm font-medium flex flex-row justify-between bg-white lg:h-[72px]">
          <div
            className="flex flex-row w-full"
            onClick={() => setOverlay(true)}
          >
            <label
              htmlFor="search"
              className="flex items-center justify-center"
            >
              <SearchSvg className="fill-primary w-6 h-6 m-[9px]" />
            </label>
            <div className="divider divider-horizontal mx-0 my-2 w-[1px] bg-[#646464] lg:my-[17px]"></div>
            <input
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder={`${itemsCount.toLocaleString()} оголошень поруч`}
              type="search"
              name="search"
              id="search"
              className="border-none outline-none w-full"
            />

            <select
              id="location"
              name="location"
              className="hidden lg:block border-0 border-l outline-none border-primary text-gray-900 text-sm w-max p-2.5"
              onChange={(event) =>
                setLocation(Number.parseInt(event.target.value))
              }
              defaultValue={location}
            >
              {lacationArr.map((item) => {
                return (
                  <>
                    <option key={crypto.randomUUID()} value={item.id}>
                      {item.lacal}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <button
            onClick={() => setOverlay(false)}
            type="submit"
            className="w-min h-full btn btn-secondary text-white text-[15px] font-medium rounded-md scale-[1.03] lg:gap-[14px] lg:flex lg:flex-row lg:flex-nowrap lg:px-[30px] lg:py-6"
          >
            <span>Пошук</span>
            <div className="hidden lg:block">
              <SearchSvg className="fill-white w-6 h-6" />
            </div>
          </button>
        </search>
      </form>

      <div
        className={cn(
          "fixed inset-0 bg-black duration-200",
          overlay
            ? "bg-opacity-40 z-10 lg:bg-opacity-0 lg:z-10"
            : "bg-opacity-0 -z-10"
        )}
        onClick={() => setOverlay(false)}
      ></div>
    </>
  );
}
