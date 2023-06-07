/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
         'ggsans-M':["ggsans-Medium"],
         'ggsans-B':["ggsans-Bold"],
         'ggsans-N':["ggsans-Normal"],
         'ggsans-SB':["ggsans-Semibold"],

         'Ginto-3':["Ginto-300"],
         'Ginto-4':["Ginto-400"],
         'Ginto-5':["Ginto-500"],
         'Ginto-6':["Ginto-600"],
         'Ginto-7':["Ginto-700"],
         
         'Ginto-Nord-5':["Ginto-Nord-500"],
         'Ginto-Nord-6':["Ginto-Nord-600"],
         'Ginto-Nord-7':["Ginto-Nord-700"],

          'Whitney-3':["Whitney-300"],
          'Whitney-4':["Whitney-400"],
          'Whitney-5':["Whitney-500"],
          'Whitney-6':["Whitney-600"],
          'Whitney-7':["Whitney-700"],
                  },
        colors:{

              darkshell:"#404EED",
        },
          
    },
  },
  plugins: [],
}
