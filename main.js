document.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("resize", detectOrientation) ;
  detectOrientation() ;
});

function detectOrientation(){
   if(window.orientation==0){
     document.getElementById('rotateScreen').style.display = "block";
     document.getElementById('displayContent').style.display = "none";
   }else{
     document.getElementById('rotateScreen').style.display = "none";
     document.getElementById('displayContent').style.display = "block";
   };
}
