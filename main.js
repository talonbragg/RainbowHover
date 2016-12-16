    var div = document.getElementById('text'),
      randomColor = function(e) {
        var hex = Math.floor(Math.random() * 0xFFFFFF),
          res = e.target,
          result = "#" + hex.toString(16);
        var pChange = document.getElementById('pchange');
        res.style.backgroundColor = result;
        res.innerHTML = result;
        pChange.style.color = result;
      },
      selectText = function (element) {
        var range, selection;    
        if (document.body.createTextRange) {
          range = document.body.createTextRange();
          range.moveToElementText(element);
          range.select();
        } else if (window.getSelection) {
          selection = window.getSelection();        
          range = document.createRange();
          range.selectNodeContents(element);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
      copyColor = function(e) {
        var copyTextDiv = e.target;
        selectText(copyTextDiv);
        try {
          var copied = document.execCommand('copy');
          var msg = copied ? 'successful.' : 'unsuccessful.';
          alert('Color copy ' + msg);
        } catch (err) {
          console.log('Unable to copy on this browser.');
        }            
      };
    var heart = document.getElementById('heart');
    function changeHeart(e) {
      var styles = window.getComputedStyle(heart); 
      var heartW = parseInt(styles.width);
      var heartH = parseInt(styles.height);
      var newHeight = heartH + 40;
      var newWidth = heartW + 40;
      heart.style.width = newHeight + 'px';
      heart.style.height = newHeight + 'px';
        if (heartW === 952 && heartH === 952) {
              document.getElementById('heartP').innerHTML = 'Your Love Is big enough!';
              document.getElementById('heartP').style.fontWeight = "bold";
              document.getElementById('heartP').style.fontSize = "35px";
            }
    }
    function GetValue()
{
    var myarray= new Array("Maybe","Yes","No","It depends","Definetely Not","Get A Life!");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}
    window.onblur = function () { document.title = 'Why Did You Leave?'; }
    window.onfocus = function () { document.title = 'You Came Back! YAY!'; }
    div.addEventListener('mouseover', randomColor);
    div.addEventListener('click', copyColor);
    heart.addEventListener('click', changeHeart);
