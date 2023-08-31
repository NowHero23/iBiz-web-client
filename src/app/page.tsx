import Image from "next/image";
import Dropdown from "@/components/myDropdown";
import Search from "@/components/layout/search";
import CategoriesSection from "@/components/layout/sections/CategoriesSection";
import VipSection from "@/components/layout/sections/VipSection";
import MyCarousel from "@/components/carousels/MyCarousel";
import { Suspense } from "react";
import DefaultLoading from "@/components/loadings/defaultLoading";

export default function Home() {
  return (
    <>
      <MyCarousel>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <>
              <div
                key={crypto.randomUUID()}
                className="w-[608px] h-[312px] rounded-[15px] flex justify-center items-center overflow-hidden border-black border relative "
              >
                <Image
                  fill
                  className="rounded-[15px] z-[-1] aspect-video fixed"
                  src="/zsu.png"
                  alt="back"
                />
                <span className="text-white text-lg bg-black p-2">{item}</span>
              </div>
            </>
          );
        })}
      </MyCarousel>

      <Suspense fallback={<DefaultLoading />}>
        <Search itemsCount={13334920} />
      </Suspense>

      <CategoriesSection />

      <VipSection />

      <main className="h-full flex flex-col xl:max-w-[1440px] w-full items-center "></main>
    </>
  );
}
