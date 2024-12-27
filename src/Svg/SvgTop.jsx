import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export function SvgTop({ width, height }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <Path
        fill="#9C6CFE"
        d="M375 198.997S341.28 207 285.477 207c-55.804 0-80.823-19.989-151.693-22.21C62.915 182.569 2 198.116 2 198.116V0h375l-2 198.997Z"
      />
      <Path
        fill="#ECA5FB"
        d="M375 198.852s-68.196-21.402-124-21.402-67.631 23.631-138.5 21.402c-70.87-2.23-112.5 0-112.5 0V0h375v198.852Z"
      />
      <Path
        fill="url(#a)"
        d="M375 198.852s-68.196-21.402-124-21.402-67.631 23.631-138.5 21.402c-70.87-2.23-112.5 0-112.5 0V0h375v198.852Z"
      />
      <Path
        fill="url(#b)"
        d="M213.094 93c2.909 0 5.699 1.205 7.756 3.35 2.057 2.145 3.212 5.054 3.212 8.088v3.812c0 15.029-13.601 30.5-36.562 30.5s-36.562-15.471-36.562-30.5v-3.812c0-3.034 1.155-5.943 3.212-8.088 2.057-2.145 4.847-3.35 7.756-3.35h51.188Z"
      />
      <Path
        fill="url(#c)"
        d="M213.094 93c2.909 0 5.699 1.205 7.756 3.35 2.057 2.145 3.212 5.054 3.212 8.088v3.812c0 15.029-13.601 30.5-36.562 30.5s-36.562-15.471-36.562-30.5v-3.812c0-3.034 1.155-5.943 3.212-8.088 2.057-2.145 4.847-3.35 7.756-3.35h51.188Z"
      />
      <Path
        fill="url(#d)"
        d="M187.5 43.438c5.333 0 10.448 2.209 14.219 6.141 3.772 3.932 5.89 9.266 5.89 14.827s-2.118 10.895-5.89 14.827c-3.771 3.933-8.886 6.142-14.219 6.142s-10.448-2.21-14.219-6.142c-3.772-3.932-5.89-9.266-5.89-14.827s2.118-10.895 5.89-14.827c3.771-3.932 8.886-6.142 14.219-6.142Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={10}
          x2={129.217}
          y1={172.804}
          y2={-100.813}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.47} stopColor="#995FEB" stopOpacity={0} />
          <Stop offset={1} stopColor="#995FEB" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={168.327}
          x2={185.931}
          y1={99.085}
          y2={144.014}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.125} stopColor="#9C6CFE" />
          <Stop offset={1} stopColor="#7A41DC" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={187.5}
          x2={212.453}
          y1={87.556}
          y2={162.077}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#885EDB" stopOpacity={0} />
          <Stop offset={1} stopColor="#E362F8" />
        </LinearGradient>
        <LinearGradient
          id="d"
          x1={176.955}
          x2={198.707}
          y1={49.011}
          y2={82.322}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.125} stopColor="#9C6CFE" />
          <Stop offset={1} stopColor="#7A41DC" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
