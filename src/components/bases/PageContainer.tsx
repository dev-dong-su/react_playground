import React, { FC, ReactNode } from "react";


interface PageContainerProps {
  children: ReactNode;
  className?: string;
  footerBgTransparent?: boolean;
}

const PageContainer: FC<PageContainerProps> = ({ children, className }) => {
  return (
    <>
      <div
        className={`flex container max-w-screen-lg mx-auto w-full h-full ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default PageContainer;
