import React, { FC } from "react";
import sprite from "../svgSprite/sprite.svg";


interface IconProps {
  width: string;
  height: string;
  fill?: string;
  stroke?: string;
  id: string;
}


const IconSvg: FC<IconProps> = ({width, height, fill, stroke, id}) => {
    return ( <svg width={width} height={height} style={{fill: fill, stroke: stroke,}}>
    <use href={sprite + id}></use>
  </svg> );
}
 
export default IconSvg;