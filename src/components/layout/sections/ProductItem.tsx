"use client";
import { HearthSvg } from "@/components/svgs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode, useState } from "react";
import Image from "next/image";

interface CategoriProp {
  img: { alt: string; src: string };
  label: string;
  href: string;
  date: string;
  price: number;
  vip?: boolean;
  top?: boolean;
}

export default function ProductItem({
  img,
  label,
  href,
  date,
  price,
  vip,
  top,
}: CategoriProp) {
  const [like, setLike] = useState(false);

  return (
    <Link
      href={href ? href : "#"}
      className="w-[160px] md:w-[226px] lg:w-[292px] h-[251px] md:h-[368px] lg:h-[486px] flex flex-col rounded border border-primary relative"
    >
      <div className="w-full h-[168px] md:h-[252px] lg:h-[336px] overflow-hidden rounded-t relative flex items-center justify-center">
        <div className="w-[159px] md:w-[225.5px] lg:w-[292px] h-[168px] md:h-[252px] lg:h-[336px] overflow-hidden">
          <Image alt={img.alt} src={img.src} quality={100} fill sizes="100vw" />
        </div>

        {top && (
          <div className="absolute bottom-[14px] md:left-6 left-3 rounded-[5px] bg-primary text-center flex items-center p-1 justify-center text-white text-xs font-bold uppercase">
            топ
          </div>
        )}
      </div>

      <div className="px-3 py-[7px] gap-[6px]">
        <div className="flex flex-col gap-[6px] font-normal text-[10px]">
          <span className="text-black overflow-hidden ">{label}</span>
          <span className="text-stone-500">{date}</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-black text-base font-semibold">
            {price.toLocaleString("en-US")} грн
          </span>
          <HearthSvg
            onClick={() => setLike(!like)}
            className={cn(
              "w-4 h-4 stroke-2 stroke-primary duration-300 md:hover:fill-primary md:hover:stroke-primary",
              like && "fill-primary stroke-primary"
            )}
          />
        </div>
      </div>

      {vip && (
        <div className="absolute -top-3 left-3">
          <Image
            src="/vipMark.svg"
            alt="vip Mark"
            width={32.5}
            height={37.46}
          />
        </div>
      )}

      <div className="absolute top-[10px] right-3 rounded-full w-[34px] h-[34px] bg-secondary">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_878_9357"
            maskUnits="userSpaceOnUse"
            x="6"
            y="6"
            width="22"
            height="22"
          >
            <rect
              x="6.80469"
              y="6.80469"
              width="20.4"
              height="20.4"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_878_9357)">
            <path
              d="M11.5766 23.5762C10.8807 23.5762 10.2884 23.3339 9.79969 22.8492C9.31094 22.3645 9.06656 21.776 9.06656 21.0836H7.66406V11.3456C7.66406 11.0076 7.79156 10.7118 8.04656 10.4584C8.30156 10.2049 8.59906 10.0781 8.93906 10.0781H21.2428V13.6058H23.4741L26.3641 17.4292V21.0836H24.8553C24.8553 21.776 24.6118 22.3645 24.1247 22.8492C23.6376 23.3339 23.0461 23.5762 22.3503 23.5762C21.6545 23.5762 21.0622 23.3339 20.5734 22.8492C20.0847 22.3645 19.8403 21.776 19.8403 21.0836H14.0816C14.0816 21.7737 13.838 22.3616 13.3509 22.8474C12.8639 23.3333 12.2724 23.5762 11.5766 23.5762ZM11.5741 22.3088C11.9141 22.3088 12.2045 22.1891 12.4453 21.9497C12.6861 21.7103 12.8066 21.4216 12.8066 21.0836C12.8066 20.7456 12.6861 20.4569 12.4453 20.2175C12.2045 19.9781 11.9141 19.8584 11.5741 19.8584C11.2341 19.8584 10.9436 19.9781 10.7028 20.2175C10.462 20.4569 10.3416 20.7456 10.3416 21.0836C10.3416 21.4216 10.462 21.7103 10.7028 21.9497C10.9436 22.1891 11.2341 22.3088 11.5741 22.3088ZM8.93906 19.8162H9.40656C9.6474 19.436 9.95227 19.1332 10.3212 18.9079C10.6901 18.6825 11.1009 18.5699 11.5537 18.5699C12.0064 18.5699 12.4205 18.6861 12.7959 18.9184C13.1714 19.1508 13.4795 19.45 13.7203 19.8162H19.9678V11.3456H8.93906V19.8162ZM22.3478 22.3088C22.6878 22.3088 22.9782 22.1891 23.2191 21.9497C23.4599 21.7103 23.5803 21.4216 23.5803 21.0836C23.5803 20.7456 23.4599 20.4569 23.2191 20.2175C22.9782 19.9781 22.6878 19.8584 22.3478 19.8584C22.0078 19.8584 21.7174 19.9781 21.4766 20.2175C21.2357 20.4569 21.1153 20.7456 21.1153 21.0836C21.1153 21.4216 21.2357 21.7103 21.4766 21.9497C21.7174 22.1891 22.0078 22.3088 22.3478 22.3088ZM21.2428 17.9995H25.1953L22.8366 14.8732H21.2428V17.9995Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </Link>
  );
}
