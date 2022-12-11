import { useEffect, useRef } from 'react';

/**
 * 실행 주기마다 콜백 함수를 실행시키는 hook입니다.
 * @param {() => void} callback 콜백 함수
 * @param {[number]} delay 실행 주기
 */
export const useInterval = (callback, [delay]) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		const tick = () => {
			savedCallback.current();
		};

		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};
