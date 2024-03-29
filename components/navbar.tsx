import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";

import { SearchIcon } from "@/asstets/icons";
import NavbarDropMenu from "./navbarMenu";
import { Icons } from "@/asstets/icons/Icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "w-full bg-default-100",
        input: "text-xs md:text-sm",
      }}
      size="lg"
      className="min-w-[130px] sm:min-w-[200px] md:min-w-[400px] lg:min-w-[600px]"
      labelPlacement="outside"
      placeholder="Search Audiobook..."
      startContent={
        <SearchIcon className="text-xs md:text-base text-orange pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      height={"80px"}
      className="bg-transparent overflow-hidden"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-2xl md:text-4xl font-arlon">
              pti<span className="font-merry">.</span>{" "}
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="center">
        <NavbarItem className="flex ">{searchInput}</NavbarItem>
        <NavbarItem className="">
          <NavbarDropMenu />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-white bg-orange"
            variant="flat"
            isIconOnly
            radius="full"
          >
            <Icons.userIcon />
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
