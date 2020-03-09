
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length == 0){
    return [];
  }

  let resArr = [];

  matrix.forEach((el, i) => {
    if (i % 2 == 0){
      el.forEach(innerEl => {
        resArr.push(innerEl);
      });
    } else {
      let sortArr = el.reverse();
      sortArr.forEach(innerEl => {
        resArr.push(innerEl);
      });
    }
  });
  return resArr;
}
