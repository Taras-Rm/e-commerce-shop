import React, { ReactNode } from "react";
import Configuration from "./components/Configuration";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="grid grid-cols-4 space-x-6 py-[40px]">
          <Configuration />
          <div className="col-span-3">{children}</div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Layout;
