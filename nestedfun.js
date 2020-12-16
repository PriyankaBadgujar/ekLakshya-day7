var showProduct=function (name,brand,cost){
    console.log(name,"having brand",brand)
    return function(discount){
        dis=(discount/100)*cost
       console.log("Total cost of mobile including",discount,"% discount is:",cost-dis)
    }
 }
 showProduct('Mobile','SAMSUNG',450000)(30)