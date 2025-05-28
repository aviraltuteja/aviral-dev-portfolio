"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
export default function SvgCover(): React.ReactElement {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const pathLengthSec = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);

  const pathLengthDark = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  return (
    <div ref={containerRef}>
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <defs>
          <filter id="AI_GaussianBlur_4">
            <feGaussianBlur stdDeviation={4} />
          </filter>
          <style>
            {
              ".cls-3,.cls-6{opacity:.9}.cls-4,.cls-7{fill:none;stroke-miterlimit:10;stroke-width:5px}.cls-4{stroke:#069747}.cls-5{fill:#069747}.cls-6,.cls-9{filter:url(#AI_GaussianBlur_4)}.cls-7{stroke:#6abd45}.cls-8{fill:#6abd45}"
            }
          </style>
        </defs>
        <g id="Layer_1" data-name="Layer 1">
          <path
            d="M0-.19h1920v432H0z"
            style={{
              fill: "#e9e9e9",
            }}
          />
          <path
            d="M0 431.81h1920V1080H0z"
            style={{
              fill: "#111",
            }}
          />
        </g>
        <g id="DarkGreen">
          <g className="cls-3">
            <motion.path
              d="m1140 680-40 40v67.12"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={1100}
              cy={786.65}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 1099.993 786.66)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-3">
            <motion.path
              d="m960 520-20 20v131.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={940}
              cy={670.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 940.005 670.59)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-3">
            <motion.path
              d="m1100 520 40 40v20l20 20v71.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={1160}
              cy={670.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 1160.001 670.606)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-3">
            <motion.path
              d="m819.17 560-20 20v51.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={799.17}
              cy={630.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 799.167 630.607)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-3">
            <motion.path
              d="m870 740 20 20v51.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={890}
              cy={810.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 889.994 810.61)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-3">
            <motion.path
              d="m780 720 20 20v20l20 20v51.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={820}
              cy={830.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 820.009 830.607)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-3">
            <motion.path
              d="m960 600 20 20v51.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={980}
              cy={670.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 980.01 670.603)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-3">
            <motion.path
              d="m1050 720-20 20v91.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={1030}
              cy={830.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 1030.002 830.593)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-3">
            <motion.path
              d="m1020 360-20 20v171.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={1000}
              cy={550.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 1000.01 550.615)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-3">
            <motion.path
              d="m900 440 40 40v31.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.path
              d="M930.6 510.6a9.4 9.4 0 1 0 9.4-9.4 9.4 9.4 0 0 0-9.4 9.4Z"
              className="cls-5"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
        </g>
        <g id="DarkGreenGlow">
          <g className="cls-6">
            <motion.path
              d="m1140 680-40 40v67.12"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={1100}
              cy={786.65}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 1099.993 786.66)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-6">
            <motion.path
              d="m960 520-20 20v131.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={940}
              cy={670.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 940.005 670.59)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-6">
            <motion.path
              d="m1100 520 40 40v20l20 20v71.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={1160}
              cy={670.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 1160.001 670.606)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-6">
            <motion.path
              d="m819.17 560-20 20v51.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={799.17}
              cy={630.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 799.167 630.607)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-6">
            <motion.path
              d="m870 740 20 20v51.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={890}
              cy={810.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 889.994 810.61)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-6">
            <motion.path
              d="m780 720 20 20v20l20 20v51.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={820}
              cy={830.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 820.009 830.607)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-6">
            <motion.path
              d="m960 600 20 20v51.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={980}
              cy={670.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 980.01 670.603)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-6">
            <motion.path
              d="m1050 720-20 20v91.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={1030}
              cy={830.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 1030.002 830.593)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-6">
            <motion.path
              d="m1020 360-20 20v171.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.circle
              cx={1000}
              cy={550.6}
              r={9.4}
              className="cls-5"
              transform="rotate(-22.5 1000.01 550.615)"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
            />
          </g>
          <g className="cls-6">
            <motion.path
              d="m900 440 40 40v31.07"
              className="cls-4"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthDark,
              }}
            />
            <motion.path
              d="M930.6 510.6a9.4 9.4 0 1 0 9.4-9.4 9.4 9.4 0 0 0-9.4 9.4Z"
              initial={{ opacity: 0 }}
              style={{
                opacity,
              }}
              className="cls-5"
            />
          </g>
        </g>
        <g id="GreenPaths">
          <motion.path
            d="M960 0v853.28"
            className="cls-7"
            initial={{ pathLength: 0 }}
            style={{
              pathLength,
            }}
          />
          <motion.path
            d="M948.72 852.72A11.28 11.28 0 1 0 960 841.44a11.28 11.28 0 0 0-11.28 11.28Z"
            className="cls-8"
            initial={{ pathLength: 0 }}
            style={{
              pathLength,
            }}
          />
          <motion.path
            d="M940 0v200l-40 40v80l-40 40v120l-40 40v120l-40 40v173.28"
            className="cls-7"
            initial={{ pathLength: 0 }}
            style={{
              pathLength,
            }}
          />
          <motion.path
            d="M768.72 852.72A11.28 11.28 0 1 0 780 841.44a11.28 11.28 0 0 0-11.28 11.28Z"
            className="cls-8"
            initial={{ pathLength: 0 }}
            style={{
              pathLength,
            }}
          />
          <motion.path
            d="M980 0v280l40 40v160l40 40v40l-40 40v40l30 40v173.28"
            className="cls-7"
            initial={{ pathLength: 0 }}
            style={{
              pathLength,
            }}
          />
          <motion.path
            d="M1038.72 852.72a11.28 11.28 0 1 0 11.28-11.28 11.28 11.28 0 0 0-11.28 11.28Z"
            className="cls-8"
            initial={{ pathLength: 0 }}
            style={{
              pathLength,
            }}
          />
          <motion.path
            d="m960 300-20 20v40l-40 40v120l-40 40v80l40 40v30l-30 30v113.28"
            className="cls-7"
            initial={{ pathLength: 0 }}
            style={{
              pathLength: pathLengthSec,
            }}
          />
          <motion.path
            d="M858.72 852.72A11.28 11.28 0 1 0 870 841.44a11.28 11.28 0 0 0-11.28 11.28Z"
            className="cls-8"
            initial={{ pathLength: 0 }}
            style={{
              pathLength,
            }}
          />
          <motion.path
            d="m1020 360 40 40v40l40 40v80l40 40v253.28"
            className="cls-7"
            initial={{ pathLength: 0 }}
            style={{
              pathLength: pathLengthSec,
            }}
          />
          <motion.path
            d="M1128.72 852.72a11.28 11.28 0 1 0 11.28-11.28 11.28 11.28 0 0 0-11.28 11.28Z"
            className="cls-8"
            initial={{ pathLength: 0 }}
            style={{
              pathLength,
            }}
          />
        </g>
        <g id="GreenGlow">
          <g className="cls-9">
            <motion.path
              d="M960 0v853.28"
              className="cls-7"
              initial={{ pathLength: 0 }}
              style={{
                pathLength,
              }}
            />
            <motion.path
              d="M948.72 852.72A11.28 11.28 0 1 0 960 841.44a11.28 11.28 0 0 0-11.28 11.28Z"
              className="cls-8"
              initial={{ pathLength: 0 }}
              style={{
                pathLength,
              }}
            />
          </g>
          <g className="cls-9">
            <motion.path
              d="M940-.19v200l-40 40v80l-40 40v120l-40 40v120l-40 40V853.1"
              className="cls-7"
              initial={{ pathLength: 0 }}
              style={{
                pathLength,
              }}
            />
            <motion.path
              d="M768.72 852.53A11.28 11.28 0 1 0 780 841.25a11.28 11.28 0 0 0-11.28 11.28Z"
              className="cls-8"
            />
          </g>
          <g className="cls-9">
            <motion.path
              d="M980-.19v280l40 40v160l40 40v40l-40 40v40l30 40V853.1"
              className="cls-7"
              initial={{ pathLength: 0 }}
              style={{
                pathLength,
              }}
            />
            <motion.path
              d="M1038.72 852.53a11.28 11.28 0 1 0 11.28-11.28 11.28 11.28 0 0 0-11.28 11.28Z"
              className="cls-8"
            />
          </g>
          <g className="cls-9">
            <motion.path
              d="m960 299.81-20 20v40l-40 40v120l-40 40v80l40 40v30l-30 30V853.1"
              className="cls-7"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthSec,
              }}
            />
            <motion.path
              d="M858.72 852.53A11.28 11.28 0 1 0 870 841.25a11.28 11.28 0 0 0-11.28 11.28Z"
              className="cls-8"
            />
          </g>
          <g className="cls-9">
            <motion.path
              d="m1020 359.81 40 40v40l40 40v80l40 40V853.1"
              className="cls-7"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: pathLengthSec,
              }}
            />
            <motion.path
              d="M1128.72 852.53a11.28 11.28 0 1 0 11.28-11.28 11.28 11.28 0 0 0-11.28 11.28Z"
              className="cls-8"
            />
          </g>
        </g>
        <g id="Icons">
          <path
            id="database"
            d="M801.87 888v4.69c0 4.31-9.79 7.81-21.87 7.81s-21.87-3.5-21.87-7.81V888c0-4.32 9.79-7.81 21.87-7.81s21.87 3.46 21.87 7.81Zm-5.35 13.16a19.31 19.31 0 0 0 5.35-2.8v9.95c0 4.32-9.79 7.82-21.87 7.82s-21.87-3.5-21.87-7.82v-9.95a19.05 19.05 0 0 0 5.35 2.8 56.48 56.48 0 0 0 33 0ZM758.13 914a18.78 18.78 0 0 0 5.35 2.79 56.48 56.48 0 0 0 33 0 19 19 0 0 0 5.35-2.79v8.39c0 4.31-9.79 7.81-21.87 7.81s-21.87-3.5-21.87-7.81Z"
            className="cls-8"
          />
          <path
            id="server"
            d="M1121.25 885.34a6.25 6.25 0 0 0-6.25 6.25v6.25a6.25 6.25 0 0 0 6.25 6.25h37.5a6.25 6.25 0 0 0 6.25-6.25v-6.25a6.25 6.25 0 0 0-6.25-6.25Zm27.34 7a2.35 2.35 0 1 1-2.34 2.34 2.35 2.35 0 0 1 2.34-2.31Zm4.69 2.34a2.35 2.35 0 1 1 2.34 2.35 2.34 2.34 0 0 1-2.34-2.32Zm-32 15.63a6.25 6.25 0 0 0-6.25 6.25v6.25a6.25 6.25 0 0 0 6.25 6.25h37.5a6.25 6.25 0 0 0 6.25-6.25v-6.25a6.25 6.25 0 0 0-6.25-6.25Zm27.34 7a2.35 2.35 0 1 1-2.34 2.34 2.35 2.35 0 0 1 2.31-2.28Zm5.47 2.34a2.35 2.35 0 1 1 2.35 2.35 2.35 2.35 0 0 1-2.38-2.29Z"
            className="cls-8"
          />
          <path
            d="M931.43 889.36a7.15 7.15 0 0 1 7.14-7.15h42.86a7.15 7.15 0 0 1 7.14 7.15v28.57h-7.14v-28.57h-42.86v28.57h-7.14Zm-7.14 34.28a2.14 2.14 0 0 1 2.14-2.14h67.14a2.14 2.14 0 0 1 2.14 2.14 8.57 8.57 0 0 1-8.57 8.57h-54.28a8.57 8.57 0 0 1-8.57-8.57ZM955.65 902l-3.46 3.46 3.46 3.46a2.68 2.68 0 0 1-3.79 3.78l-5.35-5.36a2.66 2.66 0 0 1 0-3.78l5.35-5.36a2.68 2.68 0 0 1 3.79 3.79Zm12.5-3.8 5.35 5.36a2.66 2.66 0 0 1 0 3.78l-5.35 5.36a2.68 2.68 0 0 1-3.79-3.78l3.46-3.46-3.46-3.46a2.68 2.68 0 1 1 3.79-3.78ZM876.25 929.87a2.34 2.34 0 0 1-3.91 1.74l-7.81-7a2.35 2.35 0 0 1 0-3.48l7.81-7a2.34 2.34 0 0 1 3.91 1.74v3.9h1.56a6.25 6.25 0 0 0 6.25-6.25v-16.34a7.82 7.82 0 1 1 6.25 0v16.28a12.49 12.49 0 0 1-12.5 12.5h-1.56ZM889.53 890a2.35 2.35 0 1 0-2.34 2.34 2.35 2.35 0 0 0 2.34-2.34Zm-25.78-5.47a2.34 2.34 0 0 1 3.91-1.74l7.81 7a2.35 2.35 0 0 1 0 3.48l-7.81 7a2.37 2.37 0 0 1-2.52.4 2.34 2.34 0 0 1-1.39-2.14v-3.91h-1.56a6.26 6.26 0 0 0-6.25 6.25v16.28a7.82 7.82 0 1 1-6.25 0V901a12.5 12.5 0 0 1 12.5-12.5h1.56Zm-13.28 39.87a2.35 2.35 0 1 0 2.34-2.34 2.35 2.35 0 0 0-2.34 2.34ZM1025.29 883.38a2.11 2.11 0 1 0-2.6 3.32l52 40.78a2.11 2.11 0 0 0 2.6-3.33l-13.48-10.56a14.12 14.12 0 0 0 .23-2.54h5.62a2.81 2.81 0 1 0 0-5.62H1064a9.2 9.2 0 0 0-1-3.47l.18-.17 5.63-5.62a2.82 2.82 0 1 0-4-4l-5.63 5.63-.16.18a9.2 9.2 0 0 0-4.18-1H1045a9.16 9.16 0 0 0-2.11.25Zm24.71-.45a8.44 8.44 0 0 0-8.44 8.44v.31a2.5 2.5 0 0 0 2.5 2.5h11.87a2.5 2.5 0 0 0 2.5-2.5v-.31a8.44 8.44 0 0 0-8.44-8.44Zm-14 22.5h-5.65a2.81 2.81 0 1 0 0 5.62h5.62a14 14 0 0 0 1.35 6 2.09 2.09 0 0 0-.52.42l-5.63 5.63a2.81 2.81 0 0 0 4 4l5.55-5.55a14 14 0 0 0 7.93 3.48v-12.62l-12.07-9.5a9.15 9.15 0 0 0-.58 2.52Zm15.41 19.57a13.94 13.94 0 0 0 8.33-3.85l-8.33-6.56Z"
            className="cls-8"
          />
        </g>
      </motion.svg>
    </div>
  );
}
