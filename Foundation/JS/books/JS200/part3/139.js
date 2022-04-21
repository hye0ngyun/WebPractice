// Promise 이해하기
{
  function doJob(name, person) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (person.stamina > 50) {
          resolve({
            result: `${name} success`,
            loss: 30,
          });
        } else {
          reject(new Error(`${name} failed`));
        }
      });
    });
  }

  const harin = { stamina: 100 };

  doJob("work", harin) // resolve
    .then((v) => {
      console.log(v.result); // 1 - work success
      harin.stamina -= v.loss; // harin.stamina: 70
      return doJob("study", harin); // resolve
    })
    .then((v) => {
      console.log(v.result); // 2 - study success
      harin.stamina -= v.loss; // harin.stamina: 40
      return doJob("work", harin); // reject
    })
    .then((v) => {
      console.log(v.result);
      harin.stamina -= v.loss;
      return doJob("study", harin);
    })
    .catch((e) => console.log(e)); // 3 - Error: work failed

  setTimeout(() => {
    console.log(harin); // 4 - { stamina: 40 }
  }, 1000);
}
