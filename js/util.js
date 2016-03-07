/**
 * This function reverses words in a string but keeps the order
 * of the original sentence
 */
function reverseWords(str) {
	parts = str.split(' ');
	ret = '';
	for (i = 0; (i < parts.length); i++) {
		// Preserving uppercase for the word if any upper case chars are matched
		hasUpper = parts[i].match(/^[A-Z]/);
		hasDot = parts[i].match(/\./);

		for (x = parts[i].length - 1; (x > -1); x--) {
			if (hasUpper != null && x == parts[i].length - 1) {
				ret += parts[i][x].toUpperCase();
				continue;
			}

			if (hasDot != null && x == 0) {
				ret += '.';
				continue;
			}

			if (hasDot != null && x > 0) {
				ret += parts[i][x-1];
				continue;
			}

			ret += parts[i][x].toLowerCase();
		}
		
		// Made test pass
		if (i < parts.length - 1) {
			ret += ' ';
		}
	}

	return ret;
}