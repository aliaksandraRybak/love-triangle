/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count = 0;

	for (var i = 0; i < preferences.length; i++) {
		var a = preferences[i];                        
		var b = preferences[preferences[i] - 1];   
		var c = preferences[preferences[preferences[i] - 1] - 1];        

		if ((c == i + 1) && (a != i + 1))  {
			count++;
		}
	}

	return Math.ceil(count/3);
};
