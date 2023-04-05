let Number1 = parseInt(Math.random()*20)+1;
document.getElementById("NumberOne").innerHTML = "Points: " + Number1;

let Number2 = parseInt(Math.random()*20)+1;
document.getElementById("NumberTwo").innerHTML = "Rebounds: " + Number2;

let Number3 = parseInt(Math.random()*20)+1;
document.getElementById("NumberThree").innerHTML = "Assists: " + Number3;

var MinutesTotal = Number1 * Number2;

var Minutes = MinutesTotal % 60;

var Hours = (MinutesTotal - Minutes) / 60;

var Time = MinutesTotal + " minutes or " + Hours + " hour(s) and " + Minutes + " minute(s). "
document.getElementById("TotalTime").innerHTML = "The amount of time he's played within his last 10 games were " + Time;

var BiggestNumber;
if (Number1>Number2 && Number1>Number3)
{
    BiggestNumber = "The player's top statistic in his latest game is his points, which is " + Number1 + ". ";
}
else if(Number2>Number1 && Number2>Number3)
{
    BiggestNumber = "The player's top statistic in his latest game is his rebounds, which is " + Number2 + ". ";
}
else if(Number3>Number1 && Number3>Number2)
{
    BiggestNumber = "The player's top statistic in his latest game is his assists, which is " + Number3 + ". ";
}
else if(Number1=Number2)
{
    BiggestNumber = "There are 2 or more player statistics that share the top statistic at " + Number1 + ". ";
}
else if(Number2=Number3)
{
    BiggestNumber = "There are 2 or more player statistics that share the top statistic at " + Number2 + ". ";
}
else if(Number1=Number3)
{
    BiggestNumber = "There are 2 or more player statistics that share the top statistic at " + Number3 + ". ";
}
document.getElementById("LargestNumber").innerHTML = BiggestNumber; 

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var RandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
document.getElementById("FirstLetter").innerHTML = "The first letter of the player's family name is " + RandomLetter + ". ";