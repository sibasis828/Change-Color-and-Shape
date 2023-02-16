"use strict";
var c1=0;
var c2=0;
document.getElementById('b1').addEventListener('click',function(){
    if(c1%2==0){
        document.getElementsByClassName('out')[0].style.backgroundColor="green";
        c1++;
    }
    else{
        document.getElementsByClassName('out')[0].style.backgroundColor="purple";
        c1++;
    }
});

document.getElementById('b2').addEventListener('click',function(){
    if(c2%2==0){
        document.getElementsByClassName('inn')[0].style.borderRadius= "0px 0px 0px 0px";
        c2++;
    }
    else{
        document.getElementsByClassName('inn')[0].style.borderRadius= "50%";
        c2++;
    }
});