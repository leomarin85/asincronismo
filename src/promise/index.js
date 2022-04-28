const somethingWillHappen = () => {
  return new Promise((resolve,reject) => {
    if (true){
      resolve("Is Correct")
    } else {
      reject('Fail')
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => {resolve('True')},4000)
    : reject(new Error('Fail'));
  });
};

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(error => console.error(error));

Promise.all([somethingWillHappen(),somethingWillHappen2()])
  .then(response => {
    console.log('Arrays results', response)
  })
  .catch(err => console.log(err));
