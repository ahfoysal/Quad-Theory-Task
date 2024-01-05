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
        popoverContent: " data-[hover=true]:text-orange",
      }}
      className="min-w-unit-5xl"
    >
      {siteConfig.navItems.map((menu) => (
        <SelectItem key={menu.href} value={menu.href}>
          {menu.label}
        </SelectItem>
      ))}
    </Select>
  );
}
