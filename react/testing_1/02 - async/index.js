function getData(shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        (shouldResolve ? resolve('data') : reject(new Error('error')))
      , 2000
    );
  });
}

export default getData;
