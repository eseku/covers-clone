import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: animateTransform */

function SvgComponent(props) {
  return (
    <Svg
      style={{
        margin: 'auto',
        background: '#fff',
      }}
      width={200}
      height={200}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <Path d="M72.992 40.95A25 25 0 0027.685 62.1a25 26.6-25.024 0145.307-21.15" fill="#0a0a0a"></Path>
    </Svg>
  );
}

export default SvgComponent;
