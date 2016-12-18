function GetValue()
{
    var myarray= new Array("Maybe","Yes","No","It depends","Definetely Not","It is possible", "duh", "Don't Ask me!");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}
