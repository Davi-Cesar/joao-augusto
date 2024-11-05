import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen justify-center bg-image bg-cover bg-center bg-no-repeat">
      <main className="w-screen md:w-1/2 backdrop-blur-sm px-8 py-8 ">
        {children}
      </main>
    </div>
  );
};

export default Layout;
