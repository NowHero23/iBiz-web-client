import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  img: ReactNode;
  label: ReactNode;
  href: string | object;
  rtl?: boolean;
}

export default function NavigateItem({ img, label, href, rtl }: Props) {
  return (
    <>
      <Link
        href={href}
        className={cn(
          "flex justify-between items-center flex-nowrap gap-3",
          rtl ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div
          className={cn(
            "gap-[18px] flex items-center flex-nowrap",
            rtl ? "flex-row-reverse" : "flex-row"
          )}
        >
          <div className="relative flex justify-center items-center  w-[38px] h-[34px] ">
            {img}
          </div>
          {label}
        </div>
        <svg
          className={cn("stroke-primary-focus", rtl && "rotate-180")}
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 11L6 6L1 1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Link>
    </>
  );
}
