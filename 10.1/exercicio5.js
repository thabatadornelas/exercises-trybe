
//A função myIndexOf(arr, item) 
//recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

module.exports = myIndexOf