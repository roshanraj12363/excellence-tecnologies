var arr = [4, 5, 7, 8, 14, 45, 76];
function question1(array){
    let ar = [];
    for (let i = 0; i < array.length; i++){
      if (i % 2 ===0){
        ar.push(array[i]);
      }
      return ar;
    }
  }
  alert(question1(arr));