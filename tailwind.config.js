module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme:{
    extend: {
      colors: {
        'primary': '#753742',
        'secondary': '#D9D2D2',
        'bg':'#F7F0F0',
        'secondaryDarker' : '#ededed'
      },
      textColor:{
        'primaryDark': '#1F271B',
        'primary' : '#753742',
        'secondary': '#D9D2D2',
        'primaryLighter' : "#707070"
      },
      border:{
        'primary': '#753742',
      },
      fontFamily:{
        body:['Quicksand', 'sans-serif']
      }
    }
  }
};
