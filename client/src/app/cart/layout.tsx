"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <MaxWidthWrapper>{children}</MaxWidthWrapper>;
}

export default Layout;
