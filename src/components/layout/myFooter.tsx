import Link from "next/link";
import { FacebookSvg, InstagramSvg, LogoSvg, MailSvg } from "../svgs";
import Image from "next/image";
import SocialBtns from "../socialBtns";
import AddBtn from "../addBtn";

export default function MyFooter() {
  return (
    <>
      <footer className="w-full border-primary bg-white border-t-2 flex justify-center">
        <div className="w-full max-w-[1440px] gap-6 px-6 flex flex-col py-[18px] lg:pb-[43px] lg:gap-9 lg:px-[100px] lg:py-0 lg:pt-[76px]">
          <div className="gap-6 flex flex-col lg:flex-row lg:justify-between">
            <div className="justify-between flex flex-row">
              <Link href="/" className="block">
                <LogoSvg
                  alt="logo"
                  className="stroke-black fill-black w-[74.54px] h-8 lg:w-[116px] lg:h-[50px]"
                />
              </Link>
              <SocialBtns className="gap-3 flex flex-row lg:hidden" />
            </div>

            <div className="flex flex-row gap-6 lg:gap-[52px] w-full text-xs font-normal">
              <ul className="flex-col gap-2 inline-flex text-primary-focus">
                {[
                  "Політика конфіденційності",
                  "Договір-оферта",
                  "Імпорт оголошень",
                  "Питання-відповідь",
                ].map((item) => {
                  return (
                    <>
                      <li>
                        <Link href="#">{item}</Link>
                      </li>
                    </>
                  );
                })}
              </ul>

              <ul className="flex-col gap-2 inline-flex text-primary-focus">
                {[
                  "Оплата карткою",
                  "Довідка",
                  "Зворотній зв’язок",
                  "Правила безпеки",
                ].map((item) => {
                  return (
                    <>
                      <li>
                        <Link href="#">{item}</Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>

            <AddBtn className="btn btn-secondary whitespace-nowrap  w-full lg:w-min px-[21px] py-[14px] gap-2 text-white text-sm lg:text-base font-bold order-[5] flex flex-row flex-nowrap" />

            <SocialBtns className="gap-3 lg:gap-[20.5px] flex-row hidden lg:flex" />
          </div>

          <div className="flex flex-row justify-between text-black text-[10px] text-xs font-normal">
            <div>©iBiz.ua — Всі права захищені, 2023</div>
            <div>support@iBiz.ua</div>
          </div>
        </div>
      </footer>
    </>
  );
}
