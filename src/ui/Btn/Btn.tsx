import React, { ReactNode, CSSProperties, SyntheticEvent } from "react";
import cn from "classnames";
import plus from "./../../assets/icons/plus.svg";
import "./Btn.scss";

export type BtnProps = {
  children?: ReactNode;
  type?: "button" | "submit";
  theme?: "theme1";
  icon?: boolean;
  className?: string;
  disabled?: any;
  style?: CSSProperties;
  onClick?: (event: SyntheticEvent) => void;
};

function Btn({
  children,
  type = "button",
  theme = "theme1",
  icon,
  className,
  disabled,
  style,
  onClick,
  ...rest
}: BtnProps): JSX.Element {
  return (
    <>
      <button
        className={cn("btn", theme, className)}
        style={style}
        type={type}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {icon && (
          <>
            <img src={plus} className="me-2" alt="icon" />
          </>
        )}
        {children}
      </button>
    </>
  );
}

export default Btn;
