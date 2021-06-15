$(document).ready(function(){
displaygame();
});
document.getElementById("gameStart").addEventListener("click", function(){
   document.getElementById('timer').innerHTML =
  005 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}
});
 
 var mywords=["PYTHON", "JAVA", "PHP", "REACTJS","CPP"];

function displaygame() {

  for( var i=1;i<=10;i++)
  {
    for( var j=0;j<=10;j++)
    {
      $("#box").append("<div class='designbox' data-row="+i+"data-column="+j+"></div>");
    }
  }

  arrangeletters(mywords);
  // body...
}
function arrangeletters(myarr)
{
    var position = ["row","column"];
    var nextletter =0;
    for(var i=0;i<myarr.length;i++)
    {
    var orientation= position[Math.floor(Math.random()*position.length)];
    var letters = Math.floor(Math.random()*$(".designbox").length);
    var index= letters-1;
    var myrow=$(".designbox:eq("+letters+")").data("row");
    var mycolumn =$(".designbox:eq("+letters+")").data("column");
    var newstart =0;
    if(orientation=="row")
    {
        nextletter=1;

      if((mycolumn*1)+myarr[i].length<=10)
      {
        newstart=letters;
      
        console.log(letters);
      }
      else
      {
        var newcolumn = 10-myarr[i].length;
        newstart=$(".designbox[data-row="+myrow+"][data-column="+newcolumn+"]").index();
        console.log(myarr[i] + letters);
        //newstart=$(".designbox[data-column="+newcolumn+"][data-row="+myrow+"]")
      }
    }

     if(orientation=="column")
    {
      nextletter=10;
      if((myrow*1)+myarr[i].length<=10)
      {
         newstart=letters;
         console.log(letters);
      }
      else
      {
        var newrow = 10-myarr[i].length;
        newstart=$(".designbox[data-row="+newrow+"][data-column="+mycolumn+"]").index();
        //console.log(myarr[i] + letters);
         //newstart=$(".designbox[data-column="+newcolumn+"][data-row="+myrow+"]")
      }
    }


    var characters = myarr[i].split("");
    var nextposition =0;
    $.each(characters,function(key,item){
      console.log(item);
      $(".designbox:eq("+(newstart+nextposition)+")").html(item);
      nextposition +=nextletter;
    });
   
   // // console.log(myarr[i] + ":" +letters+":"+myrow+":"+mycolumn);
 }
  }