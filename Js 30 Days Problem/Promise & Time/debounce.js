function debounce(func,timeout=300) {
   let timer;
   return(...args) =>{
      clearTimeout(timer);
      timer = setTimeout(() =>{
         func.apply(this,args);
      },timeout);
   };
};
function setInput(){
   console.log("saving data");
}
const processChange = debounce(() =>{
   setInput();
})
