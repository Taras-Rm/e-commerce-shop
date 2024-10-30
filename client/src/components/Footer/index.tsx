import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

function Footer() {
  return (
    <footer className="bg-[#212121] text-gray-300 pt-[40px] pb-[20px] text-[14px]">
      <MaxWidthWrapper>
        <div className="w-full md:w-1/2">
          <h4 className="text-[#ffffff] text-[16px] uppercase font-semibold mb-[20px]">
            Information
          </h4>
          <div className="flex flex-col space-y-[15px]">
            <span>Rules and Conditions</span>
            <span>Payment information</span>
          </div>
          <div className="h-[1px] bg-gray-300 w-full my-[30px]" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum odio
            harum qui corrupti sed asperiores dolorem unde amet, recusandae
            ullam aperiam ipsam, perspiciatis minima error excepturi rem
            mollitia ipsa officiis.
          </p>
        </div>
      </MaxWidthWrapper>
      <div className="h-[1px] bg-gray-300 w-full mt-[40px] mb-[20px]" />
      <MaxWidthWrapper>
        <span>© 2024 Store. All rights reserved.</span>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;
