/* Navigation Shrink on scroll */

function Scroll(){
    var header = document.getElementById('header');
    var yaxis = window.scrollY;
    var image = document.getElementById('image');
    var logoimage1 = document.getElementById('image1');
    var headColor = document.getElementById('header')
    var navigation = document.getElementById('navigation');
    var laptop = window.matchMedia("only screen and (min-width: 1025px)");
    var tabletMin = window.matchMedia("only screen and (min-width:768px)");
    var tabletMax = window.matchMedia("only screen and (max-width:1024px)");
    var smalldevice = window.matchMedia("only screen and (min-width:320px)");

    var anchors = document.getElementsByClassName('anchor');

    
    if (laptop.matches && yaxis > 150){
      header.style.height = '65px';
      navigation.style.paddingTop = '15px';
      image.style.width = '205px';
    }
    else if(tabletMin.matches && tabletMax.matches && yaxis > 150){
      header.style.height = '75px';
      image.style.width = '100px';
    }
    else{
      header.style.height = '';
      navigation.style.paddingTop = '';
      image.style.width = '';
    }
    if (laptop.matches && yaxis > 580){
      headColor.style.backgroundColor = "#424040";
      document.getElementsByClassName('anchor')[0].style.color= "white";
      document.getElementsByClassName('anchor')[1].style.color= "white";
      document.getElementsByClassName('anchor')[2].style.color= "white";
      document.getElementsByClassName('anchor')[3].style.color= "white";
      document.getElementsByClassName('anchor')[4].style.color= "white";      
    }else if(smalldevice.matches && tabletMax.matches && yaxis > 580){
      headColor.style.backgroundColor = "rgb(189, 177, 177)";
      document.getElementsByClassName('anchor')[0].style.color= "white";
      document.getElementsByClassName('anchor')[1].style.color= "white";
      document.getElementsByClassName('anchor')[2].style.color= "white";
      document.getElementsByClassName('anchor')[3].style.color= "white";
      document.getElementsByClassName('anchor')[4].style.color= "white"; 
    }    
    else{
      headColor.style.backgroundColor = "";
      document.getElementsByClassName('anchor')[0].style.color= "";
      document.getElementsByClassName('anchor')[1].style.color= "";
      document.getElementsByClassName('anchor')[2].style.color= "";
      document.getElementsByClassName('anchor')[3].style.color= "";
      document.getElementsByClassName('anchor')[4].style.color= ""; 
    }
    if (laptop.matches && yaxis > 580){
      logoimage1.style.width = '205px';
      logoimage1.style.display = 'block';
    }
    else{
      logoimage1.style.width = '';
      logoimage1.style.display = 'none';
    }
    if (tabletMin.matches && tabletMax.matches && yaxis > 580){
      logoimage1.style.display = 'none';
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
    //document.getElementById('navigation').style.padding = "20px 15px";
    document.getElementById('navigation').style.backgroundColor = "silver";
  }  
}




/* Random background image generate */
var image = document.getElementById('hero-content');
var randombgs = ['backgroundimage-one-min.jpg', 'backgroundimage-two-min.jpg', 'backgroundimage-three-min.jpg', 'backgroundimage-four-min.jpg'];
      let randNum = Math.floor(Math.random()*randombgs.length);
      let randSelect = "\'" + randombgs[randNum] + "\'";
      image.style.backgroundImage= 'url(' + randSelect + ')';



      /*modal view code for about section*/
      var missionModal = document.getElementById('mission-modal');      
      var missionModalBtn = document.getElementById('modal-button-mission');      
      
      var managementModal = document.getElementById('management-modal');
      var managementModalBtn = document.getElementById('modal-button-management');
      
      // if(missionModalBtn.click == true){
      //   missionModal.style.display = "block";
      // }else{
      //   console.log("it did'nt worked");
      // }
      

      function model(x){
        if (x===0){
          missionModal.style.display = "block";
        }else if(x===1){
          managementModal.style.display = 'block';
        } 
      }

      /*Another way to do*/
      
      // missionModalBtn.addEventListener('click',open);
      // function open(){
      //   missionModal.style.display = "block";
      // }


      
      /*Another way to do*/
      // managementModalBtn.addEventListener('click',open1);
      // function open1(){
      //   managementModal.style.display = 'block';
      // }
      
      var closeBtn = document.getElementById('close');  
      var closeBtn1 = document.getElementById('close1');
      closeBtn.addEventListener('click',close);
      closeBtn1.addEventListener('click',close1);
      function close(){
        missionModal.style.display= "none";
      }
      function close1(){
        managementModal.style.display= "none";
      }


      function showForm(){
        document.getElementById('contact-form').style.display = "block";
      }
      function closeform(){
        document.getElementById('contact-form').style.display = "none";
      }
