function findReverse(users,item){
   const reversed = users.reverse();
   const found = reversed.find((user)=>{
      return user.id === item;
   });
   document.getElementById('user_id').innerText = found;
}

const users = ['a','b','c','d'];
findReverse(users,'B');  