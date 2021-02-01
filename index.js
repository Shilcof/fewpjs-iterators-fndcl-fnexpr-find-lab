const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(bowls) { 
  const win = bowls.find(bowl => bowl.result === "W");
  return win ? win.year : win;
}