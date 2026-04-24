export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nexus: {
          blue:  "#0076c0",   // brand blue
          sky:   "#17C6E3",   // light accent blue
          navy:  "#0A3D66",   // deep heading blue on white
          coral: "#ff7a5c",   // coral 1
          coral2:"#ff9a76",   // coral 2
        },
      },
      boxShadow: {
        card: "0 8px 24px rgba(2, 30, 84, .08)",
      },
    },
  },
  plugins: [],
};
