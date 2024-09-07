import React from "react";
import nuberLogo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Header = () => (
  <header className="py-4">
    <div className="w-full xl:px-0 max-w-screen-xl mx-auto flex justify-between items-center">
      <img src={nuberLogo} className="w-24" alt="Nuber Eats" />
      <span className="text-xs">
        <FontAwesomeIcon icon={faUser} className="text-xl" />
      </span>
    </div>
  </header>
);
