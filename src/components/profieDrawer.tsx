import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import Drawer from "./drawer/Drawer";
import Link from "next/link";

interface Props {
  actionButton?: ReactNode;
  drawerClassName?: string | undefined;
  sideClassName?: string | undefined;
  uniqueId: string;
}

export default function ProfieDrawer({
  actionButton,
  drawerClassName,
  sideClassName,
  uniqueId,
}: Props) {
  return (
    <>
      <Drawer
        rtl={true}
        uniqueId={uniqueId}
        drawerClassName={drawerClassName}
        sideClassName={sideClassName}
        actionButton={actionButton}
      >
        <div className="px-6 py-4 flex flex-row rounded-none justify-start gap-3.5 border-b border-primary">
          <div className="w-11 h-11 rounded-full bg-black">
            <img src="#" alt="#" />
          </div>
          <span className="text-black text-base font-bold">Микола</span>
        </div>
        <div className="py-2.5 pl-6 gap-2.5">
          <Link href="#">
            <div className="h-6 w-6">
              {/*
              <Image alt={alt} src={src} quality={100} fill sizes="100vw" />
            */}
            </div>
            <span className="text-black text-base font-normal">
              Мої оголошення
            </span>
          </Link>
        </div>
        <div>2</div>
      </Drawer>
    </>
  );
}
