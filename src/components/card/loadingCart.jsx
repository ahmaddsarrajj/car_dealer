const LoadingCart = () => (
  <svg
    role="img"
    width="400"
    height="460"
    aria-labelledby="loading-aria"
    viewBox="0 0 400 460"
    preserveAspectRatio="none"
  >
    <title id="loading-aria">Loading...</title>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clipPath="url(#clip-path)"
      style={{ fill: "#f3f3f3" }}
    ></rect>
    <defs>
      <clipPath id="clip-path">
        <rect x="5" y="272" rx="2" ry="2" width="140" height="10" />
        <rect x="3" y="240" rx="2" ry="2" width="265" height="19" />
        <rect x="1" y="-29" rx="2" ry="2" width="268" height="256" />
      </clipPath>
      <linearGradient id="fill">
        <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </svg>
);
export const LoadingCategory = () => (
  <svg
    role="img"
    width="400"
    height="460"
    aria-labelledby="loading-aria"
    viewBox="0 0 400 460"
    preserveAspectRatio="none"
  >
    <title id="loading-aria">Loading...</title>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clipPath="url(#clip-path)"
      style={{ fill: "#f3f3f3" }}
    ></rect>
    <defs>
      <clipPath id="clip-path">
        <circle cx="48" cy="35" r="29" />
        <rect x="13" y="73" rx="2" ry="2" width="72" height="11" />
      </clipPath>
      <linearGradient id="fill">
        <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </svg>
);
export default LoadingCart;
