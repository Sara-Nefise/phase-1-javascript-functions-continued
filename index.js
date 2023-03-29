// code your solution here
function saturdayFun(activity='roller-skate'){
return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`;
    }
    
    
    function wrapAdjective(special){
        return function (activity) {
            return `You are ${special}${activity}${special}!`;
          };
        }

console.log(wrapAdjective("%")("a dedicated programmer"));