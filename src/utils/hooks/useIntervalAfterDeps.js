import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * DependencyList의 내용이 바뀌거나 실행 주기마다 콜백 함수를 실행시키는 hook입니다.
 * @param {() => void} callback 콜백 함수
 * @param {[...any, number]} args 마지막 요소를 제외한 나머지 - DependencyList, 마지막 요소 - 실행 주기
 * @throws {RangeError} args는 반드시 실행 주기를 포함해야 합니다.
 * @throws {TypeError} 실행 주기는 반드시 정수여야 합니다.
 */
export const useIntervalAfterDeps = (callback, args) => {
	const intervalRef = useRef();
	const savedCallback = useRef();
	const savedArgs = useRef();
	const [innerArgs, setInnerArgs] = useState(args);

	/**
	 * 배열이 같은지 검사합니다.
	 * 다른 참조의 배열이라도 내용이 같으면 같은 배열로 판단합니다.
	 * @param {any[]} a 배열
	 * @param {any[]} b 배열
	 */
	const isEqaualArray = useCallback((a, b) => {
		return (
			Array.isArray(a) &&
			Array.isArray(b) &&
			a.length === b.length &&
			a.every((val, i) => val === b[i])
		);
	}, []);

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		if (!isEqaualArray(savedArgs.current, args)) {
			savedArgs.current = args;
			setInnerArgs(args);
		}
	}, [args]);

	useEffect(() => {
		if (innerArgs.length === 0)
			throw new RangeError('There is no delay for interval.');
		if (!Number.isSafeInteger(innerArgs[innerArgs.length - 1]))
			throw new TypeError('The delay must be integer.');

		const tick = () => {
			savedCallback.current();
		};

		const delay = innerArgs[innerArgs.length - 1];

		// DependencyList가 변경되면 콜백 함수가 실행됩니다.
		tick();
		clearInterval(intervalRef.current);
		// DependencyList가 변경된 후, 일정 주기마다 콜백 함수가 실행됩니다.
		intervalRef.current = setInterval(tick, delay);
		return () => clearInterval(intervalRef.current);
	}, [innerArgs]);
};
