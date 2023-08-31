"use client";
import { useState, ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdownMenu";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
}

export default function MyDropdown({ trigger, children }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="group" data-open={open}>
          {trigger}
        </DropdownMenuTrigger>
        {open && <DropdownMenuPortal forceMount>{children}</DropdownMenuPortal>}
      </DropdownMenu>
    </>
  );
}
