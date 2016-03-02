/**
 * This function reverses words in a string but keeps the order
 * of the original sentence
 */
function reverseWords(str) {
	parts = str.split(/\W/);
	ret = '';
	for (i = 0; (i < parts.length); i++) {
		hasUpper = parts[i].match(/^[A-Z]/);
		for (x = parts[i].length - 1; (x > -1); x--) {
			if (hasUpper != null && i == parts[i].length - 1) {
				ret += parts[i][x].toUpperCase();
				continue;
			}

			ret += parts[i][x].toUpperCase();
		}
		ret += ' ';
	}
	return ret;
}
