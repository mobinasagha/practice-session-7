const print=(item)=>{
    console.log(item);}

const text = "Hello , Im Leila.";
const char = "l";
const findletter=(text, char, callback) => {
    const count = text.toLowerCase().split(char).length - 1;
    callback(count);
  }
  findletter(text,char,print);