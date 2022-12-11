/**
 * 배열이 같은지 검사합니다.
 * 다른 참조의 배열이라도 내용이 같으면 같은 배열로 판단합니다.
 * @param {any[]} a
 * @param {any[]} b
 */
export const isEqaualArray = (a, b) => {
	return (
		Array.isArray(a) &&
		Array.isArray(b) &&
		a.length === b.length &&
		a.every((val, i) => val === b[i])
	);
};
