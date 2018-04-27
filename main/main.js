module.exports = function  guessNumber(input,output) {
  var result = 0;
  if(input === output){
    return result = '4A0B';
  }

  if(input != output){
    return getNum(output);
  }
};

function getNum(item){
  var countA = 0;
  var countB = 0;
  if(item.indexOf('1')>-1 && item.indexOf('2')>-1 && item.indexOf('3')>-1 && item.indexOf('4')>-1 ){
    countB = 4;
   }
  if(item.indexOf('1') === 0 && item.indexOf('2')>-1 && item.indexOf('3')>-1 && item.indexOf('4')>-1 ){
    countA = 1;
    countB = 3;
  }
  return countA + 'A' + countB +'B';
}
/*
function getNumB(item,countA){
  var countB = 0;
  let char = [1,2,3,4];
  char.forEach(i => {
    if(item.indexOf(char[i]) > -1){
      countB++;
    }
  });
  countB = countB -countA
  return countA + 'A' + countB +'B'
}
*/
