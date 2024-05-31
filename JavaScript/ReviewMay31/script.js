// Write a function whereIsWaldo that takes an Array of Strings and uses array's forEach() method to create a new array with only the elements that contain the text "waldo" or "Waldo", somewhere in them: whereIsWaldo(['Jim Waldorf','Lynn Waldon','Frank Smith']) should return 'Jim Waldorf','Lynn Waldon';

function whereIsWaldo(strings) {
  // initialize an empty array to hoold the results

  let result = [];

  strings.forEach(function (str) {
    if (/waldos?/i.test(str)) {
      result.push(str);
    }
  });
  return result;
}

console.log(whereIsWaldo(["Jim Waldosf", "Lynn Waldon", "Frank Smith"]));
