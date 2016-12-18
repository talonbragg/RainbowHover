function GetValue()
{
    var myarray= new Array("Maybe","Yes","No","It depends","Definetely Not","Get A Life!");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}
