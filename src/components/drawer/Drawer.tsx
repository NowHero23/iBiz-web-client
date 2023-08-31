import { cn } from "@/lib/utils";

import { ReactNode } from "react";

interface Props {
  actionButton?: ReactNode;
  drawerClassName?: string | undefined;
  sideClassName?: string | undefined;
  uniqueId: string;
  rtl?: boolean;
  children: Array<ReactNode>;
}

export default function Drawer({
  actionButton,
  drawerClassName,
  sideClassName,
  uniqueId,
  rtl,
  children,
}: Props) {
  return (
    <>
      <div className={cn("z-10 drawer", rtl && "drawer-end", drawerClassName)}>
        <input id={uniqueId} type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor={uniqueId}>{actionButton}</label>
        </div>
        <div className="drawer-side h-full bottom-0">
          <label htmlFor={uniqueId} className="drawer-overlay"></label>
          <ul
            className={cn(
              "menu p-0 w-max min-h-full bg-repeat-x bg-white text-black scroll-auto flex-nowrap flex",

              sideClassName
            )}
          >
            {/* Sidebar content here */}
            {children.map((item, key) => {
              return <li key={crypto.randomUUID()}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
