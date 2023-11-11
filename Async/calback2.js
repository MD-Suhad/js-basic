orderPizza('cickhen','cheese barbeque',function(msg){
   console.log(msg);
});

function orderPizza(type, name,callback){
  
    const msg = `Our ${type} __${name} pizza is ordered`;
    callback(msg);
  

   setTimeout(function(){
      console.log(`pizza ${type}  ${name} is ready ...!!`);
   },2000);
}