const suma = (a,b) => {
  return a + b;
};

const calcular = (a, b, callback) => {
  return callback(a,b);
};

console.log(calcular(3,4,suma));
console.log(calcular(5,10,suma));

const date = (callback) => {
  console.log(new Date);
  setTimeout(() => {
    let date = new Date;
    callback(date);
  },3000)
};

const printDate = (dateNow) => {
  console.log(dateNow);
};

date(printDate);