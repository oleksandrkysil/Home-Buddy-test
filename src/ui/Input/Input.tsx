import React, { ReactNode, CSSProperties } from "react";
import cn from "classnames";
import location from "./../../assets/icons/location.svg";

import "./Input.scss";

export type InputProps = {
  children?: ReactNode;
  label?: string;
  icon1?: boolean;
  icon2?: boolean;
  className?: string;
  style?: CSSProperties;
};

function Input({
  children,
  label,
  icon1,
  icon2,
  className,
  style,
  ...rest
}: InputProps): JSX.Element {
  return (
    <div
      className={cn(["inputContainer", className], {
        inputContainer_label: label,
        inputContainer_icon1: icon1,
        inputContainer_icon2: icon2,
      })}
    >
      {children}

      {icon1 && (
        <>
          <img
            src={location}
            className="inputContainer__iconImage1"
            alt="icon"
          />
        </>
      )}
      {icon2 && (
        <>
          <img
            src={location}
            className="inputContainer__iconImage2"
            alt="icon"
          />
        </>
      )}
      {label && <div className="inputContainer_labelItem">{label}</div>}
    </div>
  );
}

export default Input;
