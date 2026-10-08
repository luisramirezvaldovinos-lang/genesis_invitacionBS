/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8FC", ivory: "#FFFFFF", blush: "#FBE1EF", rose: "#E9A9C7", "rose-deep": "#B86F98",
        gold: "#D7B76A", "gold-soft": "#EAD7A5", ink: "#493B58", "ink-soft": "#7D6D86",
        lavender: "#D9C7F3", mint: "#CBEBDD", sky: "#CFE8F8",
      },
      fontFamily: { display: ["'Playfair Display'", "serif"], body: ["'DM Sans'", "sans-serif"] },
      keyframes: {
        drift: { "0%": { transform:"translate(0,0) rotate(0deg)", opacity:"0" }, "10%":{opacity:".9"}, "90%":{opacity:".7"}, "100%":{transform:"translate(var(--drift-x,-40px),110vh) rotate(200deg)",opacity:"0"} },
        shimmer: { "0%,100%":{opacity:".35"}, "50%":{opacity:".85"} },
      },
      animation: { drift:"drift linear forwards", shimmer:"shimmer 3.5s ease-in-out infinite" },
    },
  }, plugins: [],
};
