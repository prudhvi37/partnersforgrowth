/* Navigation Shrink on scroll */

function Scroll(){
    var header = document.getElementById('header');
    var yaxis = window.scrollY;
    var image = document.getElementById('image');
    var navigation = document.getElementById('navigation');
    var laptop = window.matchMedia("only screen and (min-width: 1025px)");
    var tabletMin = window.matchMedia("only screen and (min-width:768px)");
    var tabletMax = window.matchMedia("only screen and (max-width:1024px)");
    
    if (laptop.matches && yaxis > 150){
      header.style.height = '65px';
      navigation.style.paddingTop = '15px';
      image.style.width = '300px';
     
    }
    else if(tabletMin.matches && tabletMax.matches && yaxis > 150){
      header.style.height = '90px';
      image.style.width = '300px';
      
    }
    else{
      header.style.height = '';
      navigation.style.paddingTop = '';
      image.style.width = '';
    }


}
window.addEventListener("scroll",Scroll);

/* Navigation on click */
function myClick(){
  if (document.getElementById('navigation').style.display === "flex"){
    document.getElementById('navigation').style.display = "none";
  
  }else{
    document.getElementById('navigation').style.display = "flex";
    document.getElementById('navigation').style.transition = "padding .3s linear;";
    document.getElementById('navigation').style.padding = "20px 15px";
  }  
}


/* Random background image generate */
var image = document.getElementById('hero-content');
var randombgs = ['backgroundimage-one.jpg', 'backgroundimage-two.jpg', 'backgroundimage-three.jpg', 'backgroundimage-four.jpg'];
      let randNum = Math.floor(Math.random()*randombgs.length);
      let randSelect = "\'" + randombgs[randNum] + "\'";
      image.style.backgroundImage= 'url(' + randSelect + ')';
