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

			/*
			console.log('_________________________________');
			console.log('hasUpper: ' + hasUpper);
			console.log('hasDot: ' + hasDot);
			console.log('word: ' + parts[i]);
			console.log('i: ' + i);
			console.log('x: ' + x);
			console.log('parts[i].length - 1: ' + parseInt(parts[i].length - 1));
			console.log('parts[i][x-1]: ' + parts[i][x-1]);
			console.log('parts[i][x].toLowerCase(): ' + parts[i][x].toLowerCase());
			console.log('ret: ' + ret);
			//*/

			// Edge case, only applies to first word with a dot
			if (hasUpper != null && hasDot != null && i == 0 && x == parts[i].length - 1) {
				ret += parts[i][x-1].toUpperCase();
				console.log('edge case: hit upper + dot x==3: ' + parts[i][x].toUpperCase());
				continue;
			}

			// Edge case, only applies to first word with a dot
			if (hasUpper != null && hasDot != null && i == 0 && x == 0) {
				ret += '.';
				console.log('edge case: hit upper + dot x==0: ' + parts[i][x].toUpperCase());
				continue;
			}

			// Edge case, only applies to first word with a dot
			if (hasUpper != null && hasDot != null && i == 0 && x > 0) {
				ret += parts[i][x-1].toLowerCase();
				console.log('edge case: hit upper + dot x==0: ' + parts[i][x].toUpperCase());
				continue;
			}

			if (hasUpper != null && x == parts[i].length - 1) {
				ret += parts[i][x].toUpperCase();
				console.log('hit upper: ' + parts[i][x].toUpperCase());
				continue;
			}

			if (hasDot != null && x == 0 && i > 0) {
				ret += '.';
				console.log('hit dot: hasDot: .');
				continue;
			}

			if (hasDot != null && x > 0 && i > 0) {
				ret += parts[i][x-1];
				console.log('hit dot: hasDot: ' + parts[i][x-1]);
				continue;
			}

			ret += parts[i][x].toLowerCase();
			//console.log('_________________________________');
		}

		// Made test pass
		if (i < parts.length - 1) {
			ret += ' ';
		}
	}

	return ret;
}