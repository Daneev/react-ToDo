/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const CustomComponent = props => (
  <svg {...props} width={73} height={20} viewBox="0 0 73 20">
    <defs>
      <style>
        {
          ".a{clip-path:url(#b);}.b{fill:#707070;font-size:20px;font-family:SegoeUI, Segoe UI;}.c{fill:#ffcfcf;}"
        }
      </style>
      <clipPath id="b">
        <rect width={73} height={20} />
      </clipPath>
    </defs>
    <g id="a" className="a">
      <rect className="c" width={73} height={20} />
      <text className="b" transform="translate(16 17)">
        <tspan x={0} y={0}>
          {
            props.newUsers
          }
        </tspan>
      </text>
    </g>
  </svg>
);

export default CustomComponent;
