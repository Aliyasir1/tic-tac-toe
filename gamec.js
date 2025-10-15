let randomnumber= Math.floor(Math.random()*100);
  
function btn(){
    
let userinput= Number(document.getElementById("text").value)
if(randomnumber>userinput){
    document.getElementById("h3").innerHTML ="user number is smaller then random number"
}
else if(randomnumber<userinput){
    document.getElementById("h3").innerHTML ="user number is greater "

}
else if(randomnumber===userinput){
    document.getElementById("h3").innerHTML ="you  guess the correct number"
}
}