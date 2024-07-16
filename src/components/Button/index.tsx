import React, { FC, PropsWithChildren } from "react";
import classnames from "classnames";
type Props = {
  className?: string;
  hoverInvert?: boolean;
};
const Button: FC<PropsWithChildren<Props>> = ({ className, children, hoverInvert=false }) => {
  return (
    <button
      className={classnames(
        "px-[34px] py-[12px] text-btn text-black",
        {"hover:bg-tomato bg-black": !hoverInvert},
        {"hover:bg-black hover:text-white bg-tomato": hoverInvert},
        
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
