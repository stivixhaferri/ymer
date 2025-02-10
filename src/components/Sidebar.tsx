"use client";
import React from "react";
import Link from "next/link";
import { LayoutDashboard , BadgePlus , Mails  } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 px-2  py-4 border-r-[0.2px]">
      <div className="pb-5">
        <img
          src="/fulllogo_transparent_nobuffer.png"
          className="w-[60px]"
          alt=""
        />
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={""}
              className="w-full px-2 py-4 flex items-center justify-center rounded-lg hover:bg-neutral-500"
            >
              <LayoutDashboard />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Posts</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>


      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={""}
              className="w-full px-2 py-4 flex items-center justify-center rounded-lg hover:bg-neutral-500"
            >
              <BadgePlus  />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add Post</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>



      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={""}
              className="w-full px-2 py-4 flex items-center justify-center rounded-lg hover:bg-neutral-500"
            >
              <Mails  />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Messages</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Sidebar;
