import React from "react";
import nuberLogo from "../images/logo.svg";

export const Header = () => (
  <header className="py-4">
    <div className="mx-auto max-w-screen-xl w-full">
      <img src={nuberLogo} className="w-52 mb-10 " alt="Nuber Eats" />
    </div>
    im the header
  </header>
);
