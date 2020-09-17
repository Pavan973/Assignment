function repeated(arra1) {
    var object = {};
    var answer = [];

    arra1.forEach(function (num1) {
      if(!object[num1])
          object[num1] = 0;
        object[num1] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           answer.push(prop);
       }
    }

    return answer;

}

console.log(repeated([0,1,2,3,4,5,6,7,7,8,9,10]));