module.exports = function reverse (n) {
  if(n < 0) {
		n = -n;
  };
  let res = n.toString().split('').reverse().join('');    
  //console.log(res);
  res = +res;
  //console.log(res);
  //console.log(typeof res);  
	return res;
}
