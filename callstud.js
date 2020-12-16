var showTotal={sum:function (x,y,z){
    console.log("Total marks for",this.name,"Roll number",this.rollNo,"are")
    console.log(+y+z)
         }
     }
    var showHobbies=function(...hobies){
        console.log("Hobbies of",this.name)
         hobies.forEach(element => {
             console.log("Hobbies:",element)
             
         });
        
     }
     

     var student1={
        name:'Priyanka',
        rollNo:450,
    }
    
    var student2={
        name:'Ajay',
        rollNo:205,
    }
    showTotal.sum.call(student1,30,40,50)
    showHobbies.apply(student1,["music","Dance","Sports"])
    console.log("--------------------------------------")
    showTotal.sum.call(student2,67,54,89)
    showHobbies.apply(student2,["Cooking","Painting","Sports"])