import MyCarousel from "@/components/carousels/MyCarousel";
import Search from "@/components/layout/search";
import CategoriesSection from "@/components/layout/sections/CategoriesSection";
import VipSection from "@/components/layout/sections/VipSection";
import DefaultLoading from "@/components/loadings/defaultLoading";

import FlowbiteCarousel from "@/components/test/FlowbiteCarusel";
import SwiperCarousel from "@/components/test/SwiperCarousel";

import { Suspense } from "react";

import { fetchWithCookie } from "@/lib/fetchWithCookie";
import { User } from "@/types/user";

import { cookies } from "next/headers";

interface Props {
  name: string;
}

async function getData() {
  const data: Array<Props> = await fetch("http://localhost/api/test/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    next: { revalidate: 0 },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
      return [{ name: "Error" }, { name: "Data" }];
    });

  console.log(data);
  return data;
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
}

export default async function Test() {
  const data: Array<Props> = await getData();

  // const jwt = "jwt=" + cookies().get("jwt")?.value;
  // console.log("==== " + jwt + " ====");
  // console.log(cookies().getAll());

  // , {
  //   headers: { Cookies: "jwt=" + cookies().get("jwt")?.value + ";" },
  // }

  // const data: Props = await fetch()
  //   .then((response) => response.json())
  //   .catch((error) => console.log(error));

  return (
    <>
      {data &&
        data.map((item, key) => {
          return (
            <>
              <p key={key}>{item.name}</p>
            </>
          );
        })}

      {/*
      <Suspense fallback={<DefaultLoading />}>
        <Search itemsCount={13334920} />
      </Suspense>
      */}
      {/*
      <CategoriesSection />
      
      {/*
      <VipSection />
      */}
      {/*
        <MyCarousel>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <>
                <div className="w-[608px] h-[312px] rounded-[15px] flex justify-center items-center overflow-hidden border-black border relative ">
                  <Image
                    fill
                    className="rounded-[15px] z-[-1] aspect-video fixed"
                    src="/zsu.png"
                    alt="back"
                  />
                  <span className="text-white text-lg bg-black p-2">
                    {item}
                  </span>
                </div>
              </>
            );
          })}
          
          <div className="w-[608px] h-[312px] rounded-[15px] overflow-hidden border-black border relative bg-white">
            <Image
              fill
              className=" rounded-[15px] aspect-video"
              src="/zsu.png"
              alt="back"
            />
          </div>
          <div className="w-[608px] h-[312px] rounded-[15px] overflow-hidden border-black border relative bg-white">
            <Image
              fill
              className=" rounded-[15px] aspect-video"
              src="/zsu.png"
              alt="back"
            />
          </div>
          <div className="w-[608px] h-[312px] rounded-[15px] overflow-hidden border-black border relative bg-white">
            <Image
              fill
              className=" rounded-[15px] aspect-video"
              src="/zsu.png"
              alt="back"
            />
          </div>
          
        </MyCarousel>

        <SwiperCarousel>
          {[
            <>
              <Image
                fill
                className=" rounded-[15px] aspect-video"
                src="/zsu.png"
                alt="back"
              />
            </>,
            <>
              <Image
                fill
                className=" rounded-[15px] aspect-video"
                src="/zsu.png"
                alt="back"
              />
            </>,
            <>
              <Image
                fill
                className=" rounded-[15px] aspect-video"
                src="/zsu.png"
                alt="back"
              />
            </>,
          ].map((item) => (
            <>
              <div className="w-[30vw]  bg-gray-400 rounded-xl">{item}</div>
            </>
          ))}
        </SwiperCarousel>
      */}
      {/*
        <div className="w-[608px] h-[312px] rounded-[15px] overflow-hidden border-black border bg-white">
            <Image
              fill
              className=" rounded-[15px] aspect-video"
              src="/zsu.png"
              alt="back"
            />
          </div>
          <div className="w-[608px] h-[312px] rounded-[15px] overflow-hidden border-black border bg-white">
            <Image
              fill
              className=" rounded-[15px] aspect-video"
              src="/zsu.png"
              alt="back"
            />
          </div>
          <div className="w-[608px] h-[312px] rounded-[15px] overflow-hidden border-black border bg-white">
            <Image
              fill
              className=" rounded-[15px] aspect-video"
              src="/zsu.png"
              alt="back"
            />
          </div>*/}
    </>
  );
}
