function  myFunction(){
    var d=new Date();
    
    
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    
    h=h<10 ? "0"+h : h;
    m=m<10 ? "0"+m : m;
    s=s<10 ? "0"+s : s;

    var da=d.getDay();
    
    if(da===1){
        da="Monday";
    }
    
    else if(da===2){
        da="Tuesday";
    }
    
    else if(da===3){
        da="Wednesday";
    }
   else if(da===4){
        da="Thursday";
    }
    else if(da===5){
        da="Friday";
    }
    
   else  if(da===6){
        da="Saturday";
    }
   
   else {
       da="Sunday";
   }
   
   var session="AM";
   if(h>=12){
    session="PM";
   }

   if(h>12){
    h=h-12;
   }
   
    document.getElementById("example").innerHTML=h+" :  "+m+" :  "+s+ " " + session+"  "+"<br>"+da;
}



setInterval(myFunction,3000);