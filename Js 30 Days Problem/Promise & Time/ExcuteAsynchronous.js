class EventEmitter {
    
   /**
    * @param {string} eventName
    * @param {Function} callback
    * @return {Object}
    */
   subscribe(eventName, callback) {
       if(!this.eventMap.hasOwnProperty(eventName)){
         this.eventMap[eventName] = new Set();
       }
       this.eventMap[eventName].add(callback);
       return {
           unsubscribe: () => {

               this.eventMap[eventName].delete(callback);
               
           }
       };
   }
   
   /**
    * @param {string} eventName
    * @param {Array} args
    * @return {Array}
    */
   emit(eventName, args = []) {
       const res = [];
       (this.eventMap[eventName] ?? [])
         .forEach((callback) => res.push(callback(...args)));
       return res;
       
   }
}