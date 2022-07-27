function reactiveNav() {
    var x = document.getElementById("myTopnav"); // grab the nav by ID
    if (x.className === "topnav") { // if the nav is closed, open it
      x.className += " responsive";
    } else { // close the nav if open
      x.className = "topnav";
      x.style.paddingBottom = 0;
      var subnavs = document.getElementsByClassName("subnav");
      for (var i = 0; i < subnavs.length; i++){
        subnavs[i].getElementsByTagName('button')[0].style.backgroundColor = "#333";
        var subcontents = subnavs[i].getElementsByClassName("subnav-content");
        for (var j = 0; j < subcontents.length; j++){
          subcontents[j].style.display = "none";
        }
      }
    }
}
function subNav(id, subnavbtn) {
    var x = document.getElementById(id);
    var nav = document.getElementById("myTopnav");
    var subcontents = document.getElementsByClassName("subnav-content");
    var subnavbtns = document.getElementsByClassName("subnavbtn");
    var open=true;
    // don't reopen if already open
    if (x.style.display === "block"){
      nav.style.paddingBottom = "0";
      open=false;
    }
    // close all subnavs
    for (var i = 0; i < subnavbtns.length; i++){
      subcontents[i].style.display = "none";
      subnavbtns[i].style.backgroundColor = "#333";
    }
    // turn off subnav on
    // only open if closed
    if (open) {
        x.style.display = "block";
        subnavbtn.style.setProperty("background-color", "#04AA6D", "important");
        subnavbtn.style.setProperty("color", "white");

        if (screen.width > 700){
          nav.style.paddingBottom = "50px";
        }
    }  

    
}