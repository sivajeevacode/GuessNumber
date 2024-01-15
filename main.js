var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var total=10
//random number generate
var randomnumber=Math.floor(Math.random()*10)+1

function check()
{
    //get the entered value
    var enternumber=guessnumber.value

    if(randomnumber==enternumber)
    {
        result.textContent="Right"
    }
    else
    {
        total=total-1
        score.textContent="Score: "+ total
        result.textContent="Wrong"
    }
}