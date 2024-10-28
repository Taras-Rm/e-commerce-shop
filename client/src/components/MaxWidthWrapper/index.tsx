import React, { PropsWithChildren } from "react";

function MaxWidthWrapper({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[1120px] w-full px-[15px] mx-auto">{children}</div>
  );
}

export default MaxWidthWrapper;
