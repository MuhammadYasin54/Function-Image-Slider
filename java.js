var init = 0;
var images = document.getElementsByTagName("img");

for (var i=0; i < images.length; i++){
    console.log(images[i]);
    images[i].style.display ="none";
}
images[init].style.display="block";

function right(){
     images[init].style.display ="none";
    init++;
     
   
    if (init == images.length){
        
        init=0;
        

    }
    images[init].style.display="block";
}

function left(){
     images[init].style.display ="none";
    init--;
    if (init < 0){
        init = images.length - 1;
}
images[init].style.display="block";
}