import classNames from "classnames";
import type { ReactNode } from "react";
import React from "react";
import Link from "next/link";

interface CardLinkProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const CardLink: React.FC<CardLinkProps> = ({
  children,
  className,
  href = "/",
  icon,
  iconPosition = "left",
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        className
          ? className
          : "flex items-center gap-1 font-medium text-primary-500"
      )}
    >
      {icon && iconPosition === "right" && icon}
      <span>{children}</span>
      {icon && iconPosition === "left" && icon}
    </Link>
  );
};

export default CardLink;
