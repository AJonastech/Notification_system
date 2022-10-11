var readall = document.getElementById("readall");

var active = document.getElementsByClassName("active");
 
var items = document.getElementsByClassName("notification-data");

document.getElementById("counter").innerHTML = active.length;
readall.onclick = function(){
    for ($i=0;$i<active.length;$i++){
        active[$i].style.display="none";
    }

  document.getElementById("counter").innerHTML = "0";
}
