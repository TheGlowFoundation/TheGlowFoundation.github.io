import React from 'react';
import './MyIcons.css';

export const ColoredLogo = () => (
  <svg version="1.1"
       className="MyIcons" data-testid="MyIcons"
       viewBox="0, 0, 40, 20"
       xmlns="http://www.w3.org/2000/svg"
  >
      {/*named: Add "Laz Studios &trade;" for hero banner-->*/}
      <path id="game-pad-v1"
            fill="none"
            d="
        M2,8
        L2,16
        C2,20 7,20 8,16
        L10,10
        L12,10
        L12,7
        C15.5,8.5 15.5,3 12,5
        L12,2 7.8,2
        C3.4,-1 -1,3.4 2,8
      "
      />
      <circle id="joystick"
              // strokeWidth="0.6"
              // stroke="#fff"
              fill="none"
              // strokeLinecap="round"
              cx="5" cy="5" r="3"
      />
      <polygon id="top-joy"
               // strokeWidth="0.4"
               // stroke="#fff"
               fill="none"
               // strokeLinecap="round"
               points="5,4.5 6,3 4,3"
      />
      <polygon id="bottom-joy"
               // strokeWidth="0.4"
               // stroke="#fff"
               fill="none"
               // strokeLinecap="round"
               points="5,5.5 6,7 4,7"
      />
      <polygon id="left-joy"
               // strokeWidth="0.4"
               // stroke="#fff"
               fill="none"
               // strokeLinecap="round"
               points="4.5,5 3,4 3,6"
      />
      <polygon id="right-joy"
               // strokeWidth="0.4"
               // stroke="#fff"
               fill="none"
               // strokeLinecap="round"
               points="5.5,5 7,4 7,6"
      />

      <path id="code-box"
            // stroke="#fff"
            fill="none"
            // strokeLinecap="round"
            // strokeLinejoin="round"
            // strokeWidth="0.6"
            d="
        M15.8,8.2
        L18.5,5.5
        L27,14
        L26,15
        L26,14
        L18,14
        L18,18
        L12,12
        L14.5,9.5
        C16,14 20,9.5 15.8,8.2
      "
      />
      <path id="code-lt"
            // stroke="#fff"
            fill="none"
            // strokeLinecap="round"
            // strokeLinejoin="round"
            // strokeWidth="0.8"
            d="
        M21.5,15.5
        L19.5,16.5
        L20.5,17
      "
      />
      <path id="code-slash"
            // stroke="#fff"
            fill="none"
            // strokeLinecap="round"
            // strokeLinejoin="round"
            // strokeWidth="0.8"
            d="
        M23,15
        L21,18
      "
      />
      <path id="code-gt"
            // stroke="#fff"
            fill="none"
            // strokeLinecap="round"
            // strokeLinejoin="round"
            // strokeWidth="0.8"
            d="
        M23.5,16
        L24.5,16.5
        L22.5,17.5
      "
      />
  </svg>
);


export const MinimalIcon = () => (
    <div className="MinimalIcon" data-testid="MyIcons">
        <svg version="1.1"
             viewBox="0, 0, 120, 22"
             xmlns="http://www.w3.org/2000/svg"

        >
            <path id="code-box"
                  d="
            M15.8,8.2
            L18.5,5.5
            L27,14
            L26,15
            L26,14
            L18,14
            L18,18
            L12,12
            L14.5,9.5
            C16,14 20,9.5 15.8,8.2
          "
            />
            <path id="code-lt"
                  fill="none"
                  d="
            M21.5,15.5
            L19.5,16.5
            L20.5,17
          "
            />
            <path id="code-slash"
                  fill="none"
                  d="
            M23,15
            L21,18
          "
            />
            <path id="code-gt"
                  fill="none"
                  d="
            M23.5,16
            L24.5,16.5
            L22.5,17.5
          "
            />

            <text id="svg-text"
                  fontWeight="800"
                  stroke="none"
                  x="28" y="12" dx="0" dy="4.5"
                  textLength="4.1rem"
                  lengthAdjust="spacingAndGlyphs"
                  fontSize="1rem"
                  fontFamily="Caveat"
            >
                Laz Studios
            </text>
            <defs>
                <linearGradient id="text-gradient">
                    <stop className="stop1" offset="0%"/>
                    <stop className="stop1-5" offset="10%"/>
                    <stop className="stop2" offset="20%"/>
                    <stop className="stop2-5" offset="30%"/>
                    <stop className="stop3" offset="40%"/>
                    <stop className="stop3-5" offset="50%"/>
                    <stop className="stop4" offset="60%"/>
                    <stop className="stop4-5" offset="70%"/>
                    <stop className="stop5" offset="80%"/>
                    <stop className="stop5-5" offset="90%"/>
                    <stop className="stop6" offset="100%"/>
                </linearGradient>
            </defs>
        </svg>
    </div>
)

