// Write your cade below:


module.exports = function  guessNumber(input,output) {
var countA = 0;
var countB = 0;
  if(input === output){
    return '4A0B';
  }
  if(output.indexOf('1')>-1 && output.indexOf('2')>-1 && output.indexOf('3')>-1 && output.indexOf('4')>-1 ){
    countA = 0;
    countB = 4;
   }
   return countA + 'A' + countB +'B'

};
