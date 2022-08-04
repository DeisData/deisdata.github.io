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


function pythonBlocks() {

  var hls=document.getElementsByClassName('highlighter-rouge');

  for (var i=0; i<hls.length; i++){

    if (hls[i].tagName==="CODE"){ continue; }

    var ul=document.createElement("ul");
    ul.className="nav nav-tabs";

    var li=document.createElement("li");
    li.className="nav-item";

    var a=document.createElement("a");
    a.className="nav-link active";

    if (hls[i].className==="language-python highlighter-rouge"){

      a.innerText="Python";

    } else if (hls[i].className==="language-plaintext highlighter-rouge"){
      a.innerText="Output";
    }

    li.appendChild(a);
    ul.appendChild(a);
    hls[i].insertBefore(ul, hls[i].firstChild);

  }
}