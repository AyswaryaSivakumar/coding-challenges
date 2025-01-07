Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
// input : array of numbers and target
// output : a distinct pair that adds to target value
/* steps :
1. find all pairs in an array
2. find distinct pairs in an array
3. find sum of distinct pairs
4. find if sum equals target value
5. return pairs as arrays
*/
function findPairsThatAddsToTarget(array, target) {
	let length = array.length;
	for(let i=0; i<length ; i++) {
		for(let j=i; j<length ; j++) {
			if((array[i] + array[j] === target) && array[i] !== array[j]) {
				return [array[i],array[j]];
			}
		}
	}
}

findPairsThatAddsToTarget([1,2,3], 4);