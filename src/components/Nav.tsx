"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [isSpecialPage, setIsSpecialPage] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (
      path.includes("dashboard") ||
      path.includes("login") ||
      path.includes("register")
    ) {
      setIsSpecialPage(true);
    } else {
      setIsSpecialPage(false);
    }
  }, []);

  if (isSpecialPage) {
    return <div></div>;
  }

  return (
    <div className="flex py-2 px-[5%] items-center">
      {/* Logo Section */}
      <div className="w-[50%]">
        <Link href={"/"}>
          <img
            src="/fulllogo_transparent_nobuffer.png"
            className="w-[70px] object-fit"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navigation Links (Desktop version) */}
      <div className="w-[50%] lg:flex hidden items-center justify-end gap-4">
        <a
          href="https://www.google.com/maps/place/Ymer's+Grill/@41.323734,19.4809879,17z/data=!3m1!4b1!4m6!3m5!1s0x134fd9e63e845d2d:0xfff9728ecd454c!8m2!3d41.323734!4d19.4835628!16s%2Fg%2F11sm6nvt06?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="hover:text-[#d12929]"
        >
          📍 Mbikalimi i Shkozetit
        </a>

        <a
          href="https://www.google.com/maps/place/Ymer%E2%80%99s+Grill/@41.2919408,19.5078317,19.49z/data=!4m15!1m8!3m7!1s0x134fd9089610cb59:0x9133b62c41269fef!2zUGxlcGEsIER1cnLDq3M!3b1!8m2!3d41.2920646!4d19.5081598!16s%2Fg%2F11kj82x4mc!3m5!1s0x134fd9131735ca1f:0x406fb486c1d9477f!8m2!3d41.2917917!4d19.5084236!16s%2Fg%2F11w_mxs5hn?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="hover:text-[#d12929]"
        >
          📍 Plepa Durres
        </a>

        <a
          href="tel:0695467048"
          className="hover:text-[#d12929] flex items-center gap-2"
        >
          <Phone size={14} /> 069 546 7048
        </a>

        {/* Render the button only if we're not on special pages */}
        {!isSpecialPage && (
          <Link href={"/menu"}>
            <div className="bg-[#B82424] hover:bg-[#d12929] text-white flex items-center gap-2 px-4 py-2 rounded">
              Menu
            </div>
          </Link>
        )}
      </div>

      {/* Mobile Navigation (Hamburger menu) */}
      <div className="w-[50%] lg:hidden flex items-center justify-end">
        {/* <Sheet>
          <SheetTrigger>
            <button className="w-[50px] h-[50px] border-[0.5px] flex items-center justify-center rounded-lg">
              <PanelsTopLeft className="text-gray-500" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <img src="/text.png" className="w-[80%] mx-auto" alt="Sheet Logo" />
              </SheetTitle>
              <SheetDescription>
                {/* Any additional mobile menu description can go here 
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet> */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Nav;
