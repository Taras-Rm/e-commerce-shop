"use client";

import React, { ReactNode } from "react";
import Configuration from "./components/Configuration";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CategorySelectionProvider } from "@/context/CategorySelectionContext";
import Breadcrumb from "@/components/Breadcrumb";
import { URLS } from "@/constants/pages";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <CategorySelectionProvider>
        <MaxWidthWrapper>
          <div className="grid grid-cols-4 space-x-6 py-[40px]">
            <Configuration />
            <div className="col-span-3">
              {
                <div className="space-y-[30px]">
                  <Breadcrumb
                    items={[
                      { name: "Home", isActive: false, href: URLS.home },
                      { name: "Shop", isActive: false, href: URLS.shop },
                    ]}
                  />
                  {children}
                </div>
              }
            </div>
          </div>
        </MaxWidthWrapper>
      </CategorySelectionProvider>
    </div>
  );
}

export default Layout;
