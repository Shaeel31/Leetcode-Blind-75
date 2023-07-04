/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1, s2) {
	let freqS1 = new Array(26).fill(0);
	let freqS2 = new Array(26).fill(0)

	if (s1.length > s2.length) return false;
	for (const el of s1) freqS1[el.charCodeAt(0) - 'a'.charCodeAt(0)]++;
	let i_pointer = 0;
	let j_pointer = 0;

	while (j_pointer < s2.length) {
		freqS2[s2.charCodeAt(j_pointer) - 'a'.charCodeAt(0)]++;
		if (j_pointer - i_pointer + 1 == s1.length) {
			if (checkFrequency(freqS1, freqS2)) {
				return true;
			}
		}
		if (j_pointer - i_pointer + 1 < s1.length) j_pointer++;
		else {
			freqS2[s2.charCodeAt(i_pointer) - 'a'.charCodeAt(0)]--;
			i_pointer++;
			j_pointer++;
		}
	}
	return false;
};

const checkFrequency = function (a, b) {
	for (let i = 0; i < 26; i++) {
		if (a[i] !== b[i]) return false
	}
	return true;
}


checkInclusion("ab", "eidbaooo");

// Complexity = 0(N * 26)
