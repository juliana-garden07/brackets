module.exports = function check(str, bracketsConfig) {
  let arr = str.split('')
  let stek = [];
  let open = ["(", "[", "{", "1", "3", "5"];
  let close = [")", "]", "}", "2", "4", "6"];
  for (let i = 0; i < arr.length; i++){
   
    if (open.indexOf(arr[i]) !== -1) {
      stek.push(arr[i]);
    } else if (close.indexOf(arr[i]) !== -1){
      if (open.indexOf(stek[stek.length - 1]) === close.indexOf(arr[i])){
        stek.pop();
      } else {
        return false;
      }
    } else{
      if (!stek.find(item => item === arr[i])){
        stek.push(arr[i]);
      } else {
        if (stek[stek.length - 1] === arr[i]){
          stek.pop();
        }
      }
    }
  }
  return (stek.length > 0) ? false : true;
}
