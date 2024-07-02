import React, { FC } from "react";

type Props = {
  className?: string;
  isOpen?: boolean;
  onClick?: ()=> void;
};

const MenuIcon: FC<Props> = ({ className, isOpen, onClick }) => {
  if (isOpen) {
    return (
      <svg
        onClick={onClick}
        className={className}
        width={31}
        height={31}
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.122 0L30.406 28.284L28.284 30.406L0 2.122L2.122 0Z"
          fill="#00001A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 28.284L28.284 0L30.406 2.122L2.122 30.406L0 28.284Z"
          fill="#00001A"
        />
      </svg>
    );
  } else {
    return (
      <svg
        onClick={onClick}
        className={className}
        width={40}
        height={17}
        viewBox="0 0 40 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_21_7)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H40V3H0V0ZM0 7H40V10H0V7ZM0 14H40V17H0V14Z"
            fill="#00001A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H40V3H0V0Z"
            fill="#00001A"
          />
        </g>
        <defs>
          <clipPath id="clip0_21_7">
            <rect width="40" height="17" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
};
export default MenuIcon;
