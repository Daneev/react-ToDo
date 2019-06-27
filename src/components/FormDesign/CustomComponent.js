/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";


const CustomComponentOn = props => (
  <svg {...props} width={400} height={40} viewBox="0 0 400 40">

    <defs>
      <style>
      {
        `.a{1clip-path:url(#b);}
        .bf{fill:#e4e4e4;stroke:#707070;}
        .bt{fill:#fcdada;stroke:#707070;}
        .offDone{fill:#707070;font-size:25px;font-family:TTRounds-Black, TTRounds \u261E;font-weight:800;}
        .onDone{fill:#707070;font-size:25px;font-family:TTRounds-Bold, TTRounds \u261E;font-weight:700;text-decoration:line-through;}
        .d{stroke:none;}.e{fill:none;}
        .f{fill:#d2d2d2;}`
      }
      </style>
      <clipPath id="b">
        <rect width={400} height={40} />
      </clipPath>
    </defs>
    <g id="a" className="a">
      <rect className="f" width={400} height={40} />
      <g className={props.status}>
        <rect className="d" width={400} height={40} rx={5} />
        <rect className="e" x={0.5} y={0.5} width={399} height={39} rx={4.5} />
      </g>
      <text className={props.dones} transform="translate(20 28)">
        <tspan x={0} y={0}>
          {props.mytodo}
        </tspan>
      </text>
    </g>
  </svg>
);

export default CustomComponentOn;
