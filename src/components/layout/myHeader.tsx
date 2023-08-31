import Image from "next/image";
import Dropdown from "@/components/myDropdown";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "../ui/dropdownMenu";
import Link from "next/link";

import {
  LogoSvg,
  HearthSvg,
  MessageSvg,
  UserSvg,
  MenuGamburgerSvg,
} from "../svgs";
import AddBtn from "../addBtn";
import Drawer from "../drawer/Drawer";
import NavigateItem from "../drawer/NavigeteItem";
import ProfieDrawer from "../profieDrawer";

export default function MyHeader() {
  return (
    <>
      <header className="bg-primary w-full flex items-center justify-center pt-[6px] pb-[14px] sm:py-5 lg:mx-auto lg:py-[33px]">
        <div className="relative h-full max-w-[1440px] w-full flex flex-row px-6 md:px-9 lg:px-12 xl:px-[100px] items-center justify-between">
          <div className="lg:hidden">
            <Drawer
              uniqueId="navigation-drawer"
              drawerClassName="lg:hidden"
              sideClassName="px-6 py-[33px]"
              actionButton={
                <MenuGamburgerSvg className="fill-white w-6 h-[17px]" />
              }
            >
              {[
                {
                  href: "#",
                  img: { alt: "electronic", src: "/categories/electronic.svg" },
                  label: "Електроніка",
                },
                {
                  href: "#",
                  img: { alt: "sport", src: "/categories/sport.svg" },
                  label: "Хобі та спорт",
                },
                {
                  href: "#",
                  img: { alt: "clothes", src: "/categories/clothes.svg" },
                  label: "Одяг, взуття та аксесуари",
                },
                {
                  href: "#",
                  img: { alt: "children", src: "/categories/children.svg" },
                  label: "Дитячі товари",
                },
                {
                  href: "#",
                  img: { alt: "beauty", src: "/categories/beauty.svg" },
                  label: "Краса та здоров’я",
                },
                {
                  href: "#",
                  img: { alt: "house", src: "/categories/house.svg" },
                  label: "Дім і сад",
                },
                {
                  href: "#",
                  img: { alt: "transport", src: "/categories/transport.svg" },
                  label: "Транспорт",
                },
                {
                  href: "#",
                  img: { alt: "realty", src: "/categories/realty.svg" },
                  label: "Нерухомість",
                },
                {
                  href: "#",
                  img: { alt: "work", src: "/categories/work.svg" },
                  label: "Робота",
                },
                {
                  href: "#",
                  img: { alt: "business", src: "/categories/business.svg" },
                  label: "Послуги та бізнес",
                },
                {
                  href: "#",
                  img: { alt: "food", src: "/categories/food.svg" },
                  label: "Продукти харчування",
                },
                {
                  href: "#",
                  img: { alt: "equipment", src: "/categories/equipment.svg" },
                  label: "Обладнання та сировина",
                },
                {
                  href: "#",
                  img: { alt: "plants", src: "/categories/plants.svg" },
                  label: "Тварини і рослини",
                },
                {
                  href: "#",
                  img: { alt: "building", src: "/categories/building.svg" },
                  label: "Будівництво та ремонт",
                },
              ].map((item) => {
                return (
                  <>
                    <NavigateItem
                      href={item.href ? item.href : "#"}
                      img={
                        <Image
                          className="aspect-square"
                          fill
                          alt={item.img.alt}
                          src={item.img.src}
                        />
                      }
                      label={
                        <label className="text-primary-focus text-base font-normal">
                          {item.label}
                        </label>
                      }
                    />
                  </>
                );
              })}
            </Drawer>
          </div>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 z-0 lg:static lg:translate-x-0"
          >
            <LogoSvg
              alt="logo"
              className="stroke-white fill-white w-[82px] h-9 lg:w-[116px] lg:h-[50px]"
            />
          </Link>
          <div className="flex flex-row-reverse items-center gap-0 lg:gap-[62.5px]">
            <AddBtn className="btn btn-secondary h-[47px] text-white text-base font-bold flex-row flex-nowrap hidden lg:flex" />

            <div className="lg:gap-[38px] gap-3 flex flex-row-reverse items-center justify-center">
              <div className="lg:hidden block">
                <label htmlFor="profileDraver">
                  <UserSvg
                    strokeWidth={2}
                    className="stroke-white w-[18.8px] h-5"
                  />
                </label>
                <ProfieDrawer
                  uniqueId="profileDraver"
                  drawerClassName="lg:hidden"
                />
              </div>
              <div className="hidden lg:block">
                <Dropdown
                  trigger={
                    <div className="text-white gap-[14px] inline-flex items-center justify-center rounded-md text-base font-medium hover:text-gray-200">
                      <UserSvg
                        strokeWidth={2}
                        className="group-hover:stroke-slate-300 duration-300 stroke-white w-[18.8px] h-[20px] lg:w-[22px] lg:h-[24px]" //[data-state]
                      />
                      <span className="group-hover:text-slate-300 duration-300 hidden lg:block">
                        Ваш профіль
                      </span>
                      <svg
                        className="text-white h-5 w-5 hidden lg:block group-hover:text-gray-300 duration-300 group-data-[open=true]:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        />
                      </svg>
                    </div>
                  }
                >
                  <DropdownMenuContent className="w-56 bg-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Billing</span>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Keyboard shortcuts</span>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span>Team</span>
                      </DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <span>Invite users</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>
                              <span>Email</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <span>More...</span>
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuItem>
                        <span>New Team</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>GitHub</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                      <span>API</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>Log out</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </Dropdown>
              </div>

              <HearthSvg className="w-[22.4px] h-[20px] lg:w-[27px] lg:h-[24px] stroke-2 stroke-white duration-300 transform hover:scale-110 hover:fill-red-500 hover:stroke-red-500" />
              <div className="flex flex-row gap-[14px] items-center text-white group duration-300 hover:scale-110">
                <MessageSvg className="w-[23.6px]  h-[21.2px] lg:w-[28px]  lg:h-[24px] stroke-[2] stroke-white" />
                <span className="hidden lg:block">Повідомлення</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
