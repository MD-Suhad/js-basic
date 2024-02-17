var promiseAll = async function(functions){
   return new Promise((res,rej) =>{
      let len = functions.length, ct = 0;
      const ans = new Array();
      for(let i = 0; i < len; ++i){
         functions[ind]()
         .then((val) => {
            ans[ind] = val;
            ct++;
            if(ct === len)
            res(ans);
         }) .catch(err => rej(err))
      }
   })
}