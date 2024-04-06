/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background-img':"url('https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'birthday-1':"url('https://images.pexels.com/photos/2689912/pexels-photo-2689912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'birthday-2':"url('https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'birthday-3':"url('https://images.pexels.com/photos/4389637/pexels-photo-4389637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",

      }
    },
  },
  plugins: [],
}