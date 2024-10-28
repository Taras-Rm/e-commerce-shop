"use client";

import Image from "next/image";
import React, { useState } from "react";
import logoImage from "../../../public/logo4.svg";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { URLS } from "@/constants/pages";
import { FaFacebookF, FaInstagram, FaHryvnia } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";
import { BsBasket3 } from "react-icons/bs";
import CartAside from "../CartAside";
import { CartItem } from "@/types/types";

const links: { url: string; name: string }[] = [
  {
    url: URLS.home,
    name: "Main",
  },
  {
    url: URLS.shop,
    name: "Shop",
  },
];

function Header() {
  const [isShowCart, setIsShowCart] = useState(false);

  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Fish",
      count: 2,
      price: 150,
      image:
        "https://upstreambaits.com/wp-content/uploads/2020/04/sugar_133z.jpg",
    },
    {
      id: 2,
      name: "Cat",
      count: 1,
      price: 200,
      image:
        "https://upstreambaits.com/wp-content/uploads/2020/04/sugar_133z.jpg",
    },
    {
      id: 3,
      name: "Cat",
      count: 1,
      price: 200,
      image:
        "https://upstreambaits.com/wp-content/uploads/2020/04/sugar_133z.jpg",
    },
    {
      id: 4,
      name: "Cat",
      count: 1,
      price: 200,
      image:
        "https://upstreambaits.com/wp-content/uploads/2020/04/sugar_133z.jpg",
    },
    {
      id: 5,
      name: "Cat",
      count: 1,
      price: 200,
      image:
        "https://upstreambaits.com/wp-content/uploads/2020/04/sugar_133z.jpg",
    },
    {
      id: 6,
      name: "Cat",
      count: 1,
      price: 200,
      image:
        "https://upstreambaits.com/wp-content/uploads/2020/04/sugar_133z.jpg",
    },
    {
      id: 7,
      name: "Cat",
      count: 1,
      price: 200,
      image:
        "https://upstreambaits.com/wp-content/uploads/2020/04/sugar_133z.jpg",
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#000000] py-[21px] flex">
        <MaxWidthWrapper>
          <div className="flex justify-center">
            <Image src={logoImage} width={256} alt={"logo"} />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-[#212121] flex h-[50px] text-[#ffffff]">
        <MaxWidthWrapper>
          <div className="flex h-full text-[13px]">
            <div className="uppercase font-bold space-x-[20px] h-full w-full flex items-center">
              {links.map((link) => (
                <Link href={link.url} className="h-full" key={link.url}>
                  <div className="h-full flex items-center">{link.name}</div>
                </Link>
              ))}
            </div>
            <div className="flex border-l-[1px] border-gray-300 pl-[20px] py-[3px] space-x-[30px]">
              <button className="bg-[#89C647] px-[20px] flex justify-center items-center whitespace-nowrap">
                +38 (067) 98 98 898
              </button>
              <div className="flex items-center h-full">
                <Link href={"/"} className="p-[6px]">
                  <FaFacebookF size={16} />
                </Link>

                <Link href={"/"} className="p-[6px]">
                  <FaInstagram size={16} />
                </Link>

                <Link href={"/"} className="p-[6px]">
                  <IoPlayOutline size={16} />
                </Link>
              </div>
              <div
                className="flex items-center relative"
                onClick={() => setIsShowCart(true)}
              >
                <BsBasket3 size={20} className="cursor-pointer" />
                <div className="absolute top-[calc(15%)] right-[calc(-35%)] w-[15px] h-[15px] flex items-center justify-center text-[10px] rounded-full bg-[#89C647] text-[#ffffff]">
                  0
                </div>
              </div>
              <div className="flex items-center font-bold">
                <span className="pr-[3px]">0</span>
                <FaHryvnia size={14} />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <CartAside
        isShowed={isShowCart}
        close={() => setIsShowCart(false)}
        items={cartItems}
      />
    </header>
  );
}

export default Header;
