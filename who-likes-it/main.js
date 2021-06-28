function likes(array) {
  const extraLength = array.length - 2
  let sentence = ''
  for(let i = 0; i < array.length; i++){
    if (typeof(array[i]) !== 'string' || array.length === 0) {
      return 'no one likes this'
    }
  }
  if (array.length === 1) {
    return array[0] + ' likes this'
  }
  else if (array.length === 2) {
    return array[0] + ' and ' + array[1] + ' like this'
  }
  else if (array.length === 3) {
    return array[0] + ', ' + array[1] + ' and ' + array[2] + ' like this'
  }
  else {
    return array[0] + ', ' + array[1] + ' and ' + extraLength + ' others like this'
  }
}
