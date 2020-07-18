function feetToMile(feet){
    var mile=feet/5280;
    return mile;

}
var result=feetToMile(505500);
var finalResult=Math.ceil(result);
console.log( finalResult +" "+"Miles");

function woodCalculator( chair, table ,bed){
       var chairNeedWood=chair * 1;
       var tableNeedWood=table * 3;
       var bedNeedWood= bed * 5;
       var TotalWoodNeed=chairNeedWood + tableNeedWood +bedNeedWood;
       return TotalWoodNeed;
}
  var actualWoodNeed=woodCalculator(2,3,5);
  console.log(actualWoodNeed+" "+"cubic feet" );

function brickCalculator(buildingFloor){

  var floorNumber=buildingFloor;
  if (floorNumber<=10){
          var brickNumber=floorNumber*15*1000;
          return brickNumber;
  }else if(floorNumber<=20){
         var brickNumber=(10*15*1000)+(10*12*1000);
        return brickNumber;
            
  }else{
    var brickNumber=(10*15*1000)+(10*12*1000)+((floorNumber-20)*10*1000);
    return brickNumber;
  }
}
var totalBrickNeed= brickCalculator(10);
console.log("Brick Need For Contruction:"+totalBrickNeed +" Pcs");




function tinyFrined(name){           
var lgth =name[0].length;
var smallest;

for(var i=0; i < name.length; i++){
    if(name[i].length <= lgth){
        var lgth = name[i].length;
        smallest = name[i];
    }   
     
} return smallest;  
}
  var tinyName=tinyFrined(['Ram','jaman','sazzad']);
  console.log('TinyFriend Name is: '+ tinyName);

  
