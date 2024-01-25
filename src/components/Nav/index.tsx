import { FC } from "react";
import Logo from "../Logo";

const Nav = () => {
  return (
    <nav className="grid-layout mt-[64px]">
      <Logo className="col-start-2" />
      <ul className="col-start-8 col-end-12 flex justify-end gap-[40px] items-end">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
};

export default Nav;
