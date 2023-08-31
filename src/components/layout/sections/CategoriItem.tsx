import Link from "next/link";
import { ReactNode } from "react";

interface CategoriProp {
  img: ReactNode;
  label: string;
  href?: string;
}

export default function CategoriItem({ img, label, href }: CategoriProp) {
  return (
    <Link
      href={href ? href : "#"}
      className="w-[100px] lg:w-[160px] h-min  flex items-center flex-col gap-2 lg:gap-5"
    >
      <div className="relative rounded-full bg-white flex justify-center items-center p-[22px] h-[100px] w-[100px] z-0">
        {img}
      </div>
      <span className="text-center text-base text-white lg:font-medium">
        {label}
      </span>
    </Link>
  );
}
