"use client";
import Link from "next/link";
import { FacebookSvg, InstagramSvg, MailSvg } from "./svgs";

interface Props {
  className: string | undefined;
}

export default function SocialBtns({ className }: Props) {
  return (
    <>
      <div className={className}>
        <Link href="#">
          <FacebookSvg
            alt="Facebook"
            className="w-8 h-8 lg:w-[47px] lg:h-[47px]"
          />
        </Link>
        <Link href="#">
          <InstagramSvg
            alt="Instagram"
            className="w-8 h-8 lg:w-[47px] lg:h-[47px]"
          />
        </Link>
        <Link href="#">
          <MailSvg alt="Mail" className="w-8 h-8 lg:w-[47px] lg:h-[47px]" />
        </Link>
      </div>
    </>
  );
}
