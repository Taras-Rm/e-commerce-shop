"use client";

import Preview from "@/assets/preview.mp4";
import { URLS } from "@/constants/pages";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="relative">
        <video autoPlay muted loop>
          <source src={Preview} />
        </video>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h1 className="text-[36px] text-white font-semibold">
            The best online STORE
          </h1>
          <Link
            href={URLS.shop}
            className="bg-[#89C647] py-[14px] px-[18px] uppercase mt-[20px] hover:bg-[#5f843a] text-white font-semibold"
          >
            Go to shop
          </Link>
        </div>
      </div>
    </div>
  );
}
