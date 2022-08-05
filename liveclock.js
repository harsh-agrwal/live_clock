var ctime=document.getElementById("time");
var greeting=document.getElementById("good");
var txt=document.getElementById("txt");
var cdate=document.getElementById("date");
var bg=document.getElementsByTagName("body")[0];
var bg1=document.getElementsByTagName("body")[1];

txt.addEventListener("keypress", setName);
txt.addEventListener("blur", setName);

function display(){
var refresh=1000;
setTimeout(addText,refresh)}

function addText(){
var time1=new Date();
var h=time1.getHours();
var m=time1.getMinutes();
var s=time1.getSeconds();
var Tm=format(time1);
ctime.innerHTML=Tm;
var day=getDayName(time1.getDay());
var month=getMonthName(time1.getMonth());
var dt=time1.getDate();
var year=time1.getFullYear();
var currentdate=day+" "+month+" "+dt+" "+year;
cdate.innerHTML=currentdate;


var hour=time1.getHours();
if(hour>=4 && hour<12){
    greeting.innerText="Good Morning";
}
else if(hour>=12 && hour<16){
    greeting.innerText="Good Afternoon";
    bg.classList.add("bg");
}
else if(hour>=16 && hour<22){
    greeting.innerText="Good Evening";
    bg.classList.add("bg1");
}
else{
    greeting.innerText="Good Night";
}

display();
  }
  function format(time1){
    var h=time1.getHours();
    var m=time1.getMinutes();
    var s=time1.getSeconds();
    var ampm=h>=12?'PM':'AM';
    h=h%12;
    h=h?h:12;
    h=h<10?'0'+h:h;
    m=m<10?'0'+m:m;
    s=s<10?'0'+s:s;
    var tm=h+":"+m+":"+s+" "+ampm;
    return tm;
  }
   const getDayName=(dayIndex) =>{
    let daysArray=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return daysArray[dayIndex];
  }
  const getMonthName=(dayIndex) =>{
    let MonthsArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return MonthsArray[dayIndex];
  }

  
function getName() {
    if (localStorage.getItem("myData") === null) {
      txt.innerHTML = "[Enter Name]";
    } else {
      txt.innerHTML = localStorage.getItem("myData");
    }
  }
  
  function setName(e) {
    if (e.type === "keypress") {
      if (e.keyCode == 13) {
        localStorage.setItem("myData", e.target.innerHTML);
        txt.blur();
      }
    } else {
      localStorage.setItem("myData", e.target.innerHTML);
    }
  }
  
  getName();
  addText();
