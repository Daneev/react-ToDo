/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const CustomComponent = props => (
  <svg {...props} width={500} height={301} viewBox="0 0 500 301">
    <defs>
      <style>
        {
          ".a{clip-path:url(#b);}.b,.d,.e{fill:#707070;}.b{font-size:33px;}.b,.d{font-family:SegoeUI, Segoe UI;}.c{fill:#f9f9f9;stroke:#707070;}.d,.e{font-size:14px;}.e{font-family:SegoeUI, Segoe UI;}.f{stroke:none;}.g{fill:none;}.h{fill:#e8e8e8;}"
        }
      </style>
      <clipPath id="b">
        <rect width={500} height={301} />
      </clipPath>
    </defs>
    <g id="a" className="a">
      <rect className="h" width={500} height={301} />
      <text className="b" transform="translate(18 46)">
        <tspan x={0} y={0}>
          {props.mytodolist}
        </tspan>
      </text>
      <g className="c" transform="translate(18 97)">
        <rect className="f" width={188} height={27} rx={6} />
        <rect className="g" x={0.5} y={0.5} width={187} height={26} rx={5.5} />
      </g>
      <text className="d" transform="translate(18 93)">
        <tspan x={0} y={0}>
          {"SearchPanel"}
          {props.todoinput}
        </tspan>
      </text>
      <text className="e" transform="translate(18 273)">
        <tspan x={0} y={0}>
          {props.labels}
        </tspan>
        <tspan x={0} y={16}>
          {"Build App"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default CustomComponent;
