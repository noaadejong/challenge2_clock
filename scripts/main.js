// UREN
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    if (h == 0) {
        h = 24;
    }
    if (h > 24) {
        h = h - 24;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    var time = h + ":" + m + ":" + s;
    document.getElementById("clock").innerHTML = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();

// DATUM
    var dateOfBirth = new Date("January 13, 1980");
    document.getElementById('date').innerHTML = (formatDate(dateOfBirth));

function formatDate() {
    var date = new Date();

    var year = date.getFullYear();

    var month = date.getMonth();
    month = month + 1;

    if (month < 10) {
        month = "0" + month;
    }
    var day = date.getDate();

    if (day < 10) {
        day = "0" + day;
    }
    return day + "-" + month + "-" + year;
}


// De maan en aarde die bewegen.
var imgObj = null;
var imgObjt = null;
var animate ;
function init(){
   imgObj = document.getElementById('myImage');
   imgObjt = document.getElementById('foto');
   imgObj.style.position= 'absolute';
   imgObjt.style.position= 'absolute';
   imgObj.style.top = '200px';
   imgObjt.style.top = '100px';
   imgObj.style.left = '-650px';
   imgObjt.style.left = '-200px';
   imgObj.style.visibility='hidden';
   imgObjt.style.visibility='hidden';
   moveRight();
}
function moveRight(){
if (parseInt(imgObj.style.left)<=10 && parseInt(imgObjt.style.left)<=10)
{
   imgObj.style.left = parseInt(imgObj.style.left) + 2 + 'px';
   imgObjt.style.left = parseInt(imgObj.style.left) + 2 + 'px';
   imgObj.style.visibility='visible';
   imgObjt.style.visibility='visible';
   animate = setTimeout(moveRight,70); // call moveRight in 20msec
   //stopanimate = setTimeout(moveRight,20);
  }
else
  stop();
}

function stop(){
   clearTimeout(animate);
}
window.onload =init;

// VERANDEREN VAN DE ACHTERGROND (OCHTEND/ZONSOPGANG , OVERDAG , AVOND/NACHT)
function changeBg() {
    var now = new Date();
    var hours = now.getHours();

    //based on hours it will dynamically change the image
        //1.png, 2.png, ..., 23.png

        if (hours >= 5 && hours < 9) {
            document.getElementById('background').style.backgroundImage = "url(images/zonsopgang.jpg)";
            document.getElementById('foto').src = 'images/luchtballon.png';
            document.getElementById('myImage').src = 'images/vliegtuig.png';
            document.getElementById('raket').src = 'images/vogel.png';
        } else if (hours >= 10 && hours < 18) {
            document.getElementById('background').style.backgroundImage = "url(images/overdag.jpg)";
            document.getElementById('foto').src = 'images/zappelin.png';
            document.getElementById('myImage').src = 'images/luchtballon.png';
            document.getElementById('raket').src = 'images/vogel.png';
        } else {
            document.getElementById('background').style.backgroundImage = "url(images/background.png)";
        }

 }
changeBg();
 setInterval(function(){ changeBg(); }, 300000); //300000 means 5 min
