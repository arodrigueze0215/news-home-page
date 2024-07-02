import { FC, useState, useEffect } from "react";
import Logo from "../Logo";
import MenuIcon from "../MenuIcon";
import classNames from "classnames";
import Links from "./Links";

const Nav = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log('window.innerWidth >= 1024', window.innerWidth >= 1024)
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="grid-layout mt-[24px] xl:mt-[64px] ">
      <Logo className="col-start-1 xl:col-start-2" />
      {!isDesktop && (
        <>
          <div className="flex items-center justify-end col-start-4">
            <MenuIcon
              isOpen={isMenuOpen}
              className={classNames("z-20 cursor-pointer", {'fixed': isMenuOpen})}
              onClick={handleOpenMenu}
            />
          </div>
          <div
            className={classNames(
              "z-10 fixed inset-0 transition transition[transform] duration-300 ease-in-out flex",
              { "translate-x-none": isMenuOpen },
              { "translate-x-full": !isMenuOpen }
            )}
          >
            <div
              className={classNames(
                "bg-black w-[20%] h-full transition[opacity] transition  ease-in-out",
                { "opacity-50 duration-700": isMenuOpen },
                { "opacity-0 duration-0": !isMenuOpen }
              )}
            ></div>
            <div className="bg-white w-[80%] h-full">
              <div className="">
                <Links isDesktop={isDesktop}/>
              </div>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <Links isDesktop={isDesktop}/>
      )}
    </nav>
  );
};

export default Nav;
