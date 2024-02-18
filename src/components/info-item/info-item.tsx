import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  fsIcon: any;
  children: React.ReactNode;
  iconColor?: FontAwesomeIconProps["color"];
};

export const InfoItem = ({ fsIcon, children, iconColor = "green" }: Props) => {
  return (
    <div className="flex items-center gap-x-3">
      <FontAwesomeIcon
        icon={fsIcon}
        className="min-w-[24px] w-[24px] h-[24px]"
        color={iconColor}
      />
      <span className="hover:underline underline-offset-2 cursor-pointer">
        {children}
      </span>
    </div>
  );
};
