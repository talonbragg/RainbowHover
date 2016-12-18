function GetValue()
{
    var myarray= new Array("Maybe","Yes","No","It depends","Definetely Not","It is possible", "duh", "Don't Ask me!");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}
if (event.keyCode === 13) {
    document.getElementById().innerHTML = "Don't Use Enter!";
    }
