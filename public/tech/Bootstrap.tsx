import React from "react";

const Bootstrap = ({ size = 64 }) => {
  return (
    <svg
      style={{ width: size, height: size }}
      xmlns="http://www.w3.org/2000/svg"
      width="261"
      height="260"
      fill="none"
      viewBox="0 0 261 260"
    >
      <g filter="url(#filter0_d_20_1677)">
        <rect
          width="180"
          height="180"
          x="40.724"
          y="36"
          fill="#fff"
          rx="32"
        ></rect>
        <rect
          width="179"
          height="179"
          x="41.224"
          y="36.5"
          stroke="#D9D9D9"
          rx="31.5"
        ></rect>
      </g>
      <path
        fill="#7952B3"
        fillRule="evenodd"
        d="M101.427 85.764c-5.706 0-9.928 4.994-9.739 10.41.182 5.203-.054 11.942-1.75 17.438-1.703 5.511-4.58 9.004-9.281 9.452v5.061c4.7.449 7.578 3.94 9.28 9.452 1.697 5.495 1.932 12.234 1.751 17.438-.19 5.415 4.033 10.41 9.74 10.41h58.466c5.706 0 9.927-4.994 9.738-10.41-.181-5.204.054-11.943 1.751-17.438 1.702-5.512 4.573-9.004 9.274-9.452v-5.061c-4.701-.449-7.571-3.94-9.274-9.452-1.697-5.495-1.932-12.235-1.751-17.438.189-5.415-4.032-10.41-9.738-10.41h-58.468.001zm47.026 49.036c0 7.458-5.562 11.981-14.794 11.981h-15.714a1.695 1.695 0 01-1.695-1.695v-38.983a1.695 1.695 0 011.695-1.695h15.625c7.697 0 12.749 4.17 12.749 10.571 0 4.493-3.398 8.516-7.728 9.22v.235c5.894.646 9.862 4.728 9.862 10.366zm-16.507-25.019h-8.96v12.656h7.546c5.834 0 9.051-2.349 9.051-6.548 0-3.935-2.766-6.108-7.637-6.108zm-8.96 17.678v13.947h9.289c6.075 0 9.292-2.437 9.292-7.017 0-4.581-3.308-6.931-9.682-6.931h-8.899v.001z"
        clipRule="evenodd"
      ></path>
      <defs>
        <filter
          id="filter0_d_20_1677"
          width="260"
          height="260"
          x="0.724"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="20"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_20_1677"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_20_1677"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default Bootstrap;
