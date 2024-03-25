let friends = [{
   name:'anna',
   books:['Bible','Harry Potter'],
   age:21
   },
   {
      name:'Bob',
      books:['war and peace','Romeo and Juliet'],
      age:25
   },
   {
      name:'alice',
      books:['THe lord of the rings','the shining'],
      age:18
   }
];
let result = friends.reduce((pre,curr) =>{
   return [...pre,...curr.books]
},[])
console.log(result);