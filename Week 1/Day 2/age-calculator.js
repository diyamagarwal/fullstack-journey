myName = prompt("What is your Name?");
myYOB = prompt("Enter your year of birth");

if(isNaN(myYOB))
alert("Enter proper year of birth");

else 
{
today = 2026;
age = today - myYOB;
alert(`${myName}`,"'s age is", `${age}`);
}