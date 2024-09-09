window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script4 = function()
{
  var player = GetPlayer();

var Start = player.GetVar("timer_Start");

var nDuration = Start;
var hours = Math.floor(nDuration / 3600);
var minutes = Math.floor((nDuration % 3600) / 60);
var seconds = (nDuration % 3600) % 60;
if (hours < 10) {hours = "0"+hours;}
if (minutes < 10) {minutes = "0"+minutes;}
if (seconds < 10) {seconds = "0"+seconds;}
nDuration = hours+':'+minutes+':'+seconds;

player.SetVar("timer_Duration" , nDuration);
}

};
