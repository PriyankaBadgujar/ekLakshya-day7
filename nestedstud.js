 var showTotal=function (...marks){
     sum=0;
    return function(){
        marks.forEach(element=> {
            sum+=element;
            
        });
         return sum
     }()/marks.length;
  }
 
  console.log("Average of numbers are:",showTotal(180,390,506))
 
  console.log("Average of numbers are:",showTotal(180,390,506,34,564,5))