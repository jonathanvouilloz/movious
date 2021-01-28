module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme:{
    extend: {
      colors: {
        'primary': '#721817',
        'primaryLighter':'#871E1C',
        'secondary': '#E6E6E6',
        'bg':'#FFF7F8',
        'secondaryDarker' : '#ededed',
        'tagGreen' : '#6ED66E',
        'lightGrey' : '#707070'
      },
      textColor:{
        'primaryDark': '#1F271B',
        'primary' : '#721817',
        'secondary': '#D6D6D6',
        'primaryLighter' : "#707070"
      },
      border:{
        'primary': '#1F271B',
        'primary-dark': '#1F271B',
      },
      fontFamily:{
        body:['Quicksand', 'sans-serif']
      },
      borderWidth:{
        '1' : '1px'
      },
       keyframes: {
        roll: {
          '0%%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' }
        }
      },
      animation: {
        'roll': 'roll 0.5s linear 1'
      }
    }
  }
};
