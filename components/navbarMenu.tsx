"use client";
import { siteConfig } from "@/config/site";
import { Select, SelectItem } from "@nextui-org/select";

import React from "react";

export default function NavbarDropMenu() {
  return (
    <Select
      placeholder="MENU"
      disallowEmptySelection
      size="sm"
      classNames={{
        selectorIcon: "text-orange",
        popoverContent: " data-[active=true]:text-orange",
        trigger: "text-xs",
        label: "text-xs",
        value: "text-xs md:text-sm dark:text-white text-black font-medium",
      }}
      className="min-w-[100px] md:min-w-unit-5xl"
    >
      {siteConfig.navItems.map((menu) => (
        <SelectItem key={menu.href} value={menu.href}>
          {menu.label}
        </SelectItem>
      ))}
    </Select>
  );
}
