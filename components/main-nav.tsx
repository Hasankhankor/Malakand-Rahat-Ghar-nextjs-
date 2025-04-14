"use client"

import * as React from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useLanguage } from "./theme-provider"

export function MainNav() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const navItems = {
    en: ["Home", "About Us", "Services", "Gallery", "Contact", "Donate"],
    ur: ["ہوم", "ہمارے بارے میں", "خدمات", "گیلری", "رابطہ کریں", "عطیہ کریں"],
  };

  return (
    <>
      <div className="mr-4 flex">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" fill="currentColor" />
          <span className="hidden text-sm sm:text-base font-bold sm:inline-block">
            {language === "en" ? "Malakand Rahat Ghar" : "ملاکنڈ راحت گھر"}
          </span>
        </Link>
      </div>
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems[language].map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-4 flex items-center space-x-4">
        <button
          onClick={() => handleLanguageChange("en")}
          className={`px-4 py-2 ${language === "en" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange("ur")}
          className={`px-4 py-2 ${language === "ur" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
        >
          اردو
        </button>
      </div>
    </>
  );
}
