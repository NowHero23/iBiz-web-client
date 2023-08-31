import Image from "next/image";
import CategoriItem from "./CategoriItem";

export default function CategoriesSection() {
  return (
    <section className="bg-primary w-full flex justify-center h-max">
      <div className="overflow-x-auto overflow-y-hidden h-max">
        <div className="p-6 lg:py-[62px] grid grid-rows-2 grid-cols-7 gap-5 h-max  w-max">
          {[
            {
              img: (
                <Image fill alt="electronic" src="/categories/electronic.svg" />
              ),
              label: "Електроніка",
              href: "#",
            },
            {
              img: <Image fill alt="sport" src="/categories/sport.svg" />,
              label: "Хобі та спорт",
              href: "#",
            },
            {
              img: <Image fill alt="clothes" src="/categories/clothes.svg" />,
              label: "Одяг, взуття та аксесуари",
              href: "#",
            },
            {
              img: <Image fill alt="children" src="/categories/children.svg" />,
              label: "Дитячі товари",
              href: "#",
            },
            {
              img: <Image fill alt="beauty" src="/categories/beauty.svg" />,
              label: "Краса та здоров’я",
              href: "#",
            },
            {
              img: <Image fill alt="house" src="/categories/house.svg" />,
              label: "Дім і сад",
              href: "#",
            },
            {
              img: (
                <Image fill alt="transport" src="/categories/transport.svg" />
              ),
              label: "Транспорт",
              href: "#",
            },
            {
              img: <Image fill alt="realty" src="/categories/realty.svg" />,
              label: "Нерухомість",
              href: "#",
            },
            {
              img: <Image fill alt="work" src="/categories/work.svg" />,
              label: "Робота",
              href: "#",
            },
            {
              img: <Image fill alt="business" src="/categories/business.svg" />,
              label: "Послуги та бізнес",
              href: "#",
            },
            {
              img: <Image fill alt="food" src="/categories/food.svg" />,
              label: "Продукти харчування",
              href: "#",
            },
            {
              img: (
                <Image fill alt="equipment" src="/categories/equipment.svg" />
              ),
              label: "Обладнання та сировина",
              href: "#",
            },
            {
              img: <Image fill alt="plants" src="/categories/plants.svg" />,
              label: "Тварини і рослини",
              href: "#",
            },
            {
              img: <Image fill alt="building" src="/categories/building.svg" />,
              label: "Будівництво та ремонт",
              href: "#",
            },
          ].map((item, key) => {
            return (
              <CategoriItem
                key={key}
                href={item.href}
                img={
                  <div className="relative w-[100px] h-[100px] lg:w-40 lg:h-40 ">
                    {item.img}
                  </div>
                }
                label={item.label}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
