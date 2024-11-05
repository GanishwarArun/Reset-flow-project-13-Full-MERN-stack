/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {
	///Your code Starts here 
	
	if (parseInt(num) == Number(num)) {
		return -num
	} else {
		return -1
	}
	///Your code Ends here
	
}
/*
Lines For TestCase
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/