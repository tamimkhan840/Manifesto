/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"], // Pacifico ফন্ট কাস্টম নাম দিয়ে অ্যাড করা
      },
    },
  },
  plugins: [],
}