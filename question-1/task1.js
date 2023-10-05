function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject(new Error('This is not an array.'));
        return;
      }
  
      const input_array = [];
  
      for (const item of arr) {
        if (typeof item === 'string') {
            input_array.push(item.toLowerCase());
        }
      }
  
      resolve(input_array);
    });
  }

  const mixedArray = ["PIZZA",10,true,25,false,"Wings"]
  console.log(lowerCaseWords(mixedArray));