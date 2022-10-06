import React, { ReactNode, CSSProperties } from "react";

import "./Radio.scss";

export type RadioProps = {
  children?: ReactNode;
  id: string;
  title?: string;
  image: string;
  style?: CSSProperties;
};

function Radio({
  children,
  id,
  title,
  image,
  style,
  ...rest
}: RadioProps): JSX.Element {
  return (
    <div className="radioContainer">
      {children}
      <label htmlFor={id} className="radioContainer__label">
        <img src={image} alt="" className="radioContainer__icon" />
        <span className="radioContainer__title">{title}</span>
      </label>
    </div>
  );
}

export default Radio;
