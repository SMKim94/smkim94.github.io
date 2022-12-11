module.exports = {
	/**
	 * 한 줄이 이 글자수를 넘게 되면 들여쓰기되어 코드가 세로로 정리된다.
	 * @default 80
	 */
	printWidth: 80,
	/**
	 * 탭 너비
	 * @default 2
	 */
	tabWidth: 2,
	/**
	 * 탭 사용 여부. true이면 탭이있는 줄을 들여 쓰기 한다.
	 * @default true
	 */
	useTabs: true,
	/**
	 * 세미클론 강제 여부
	 * @default true
	 */
	semi: true,
	/**
	 * 홑따옴표를 쓸건지 설정.
	 * @default false 코딩을 하면서 홑따옴표를 썼다면 강제로 쌍따옴표로 변경.
	 */
	singleQuote: true,
	/**
	 * 언제 따옴표 설정을 변경할지 설정
	 * @type {'as-needed' | 'consistent' | 'preserve'}
	 * - as-needed - 홑따옴표가 필요한 객체 속성 주변에만 따옴표 추가
	 * - consistent - 객체에서 하나 이상의 속성에 홑따옴표가 필요한 경우 모든 속성을 따옴표로 묶음
	 * - preserve - 객체 속성의 홑따옴표가 문법상 맞으면 입력한대로 사용
	 */
	quoteProps: 'as-needed',
	/**
	 * JSX에서 홑따옴표를 쓸건지 설정.
	 * @default false
	 */
	jsxSingleQuote: true,
	/**
	 * 객체, 배열, 함수 등의 후행에 쉼표를 찍을지 제어
	 * @type {'none' | 'es5' | 'all'}
	 * - none - 쉼표를 붙이지 않음
	 * - es5 - ES5에서 유효한 후행 쉼표 붙힘 (객체, 배열 등)
	 * - all - 가능하면 후행 쉼표를 붙힘 (함수 인수)
	 * @default 'es5'
	 */
	trailingComma: 'es5',
	/**
	 * 객체 리터럴 사용시 괄호에 공백 삽입 여부
	 * @default true
	 */
	bracketSpacing: true,
	/**
	 * 여러 줄로 구성된 HTML, JSX, Vue, Angular 엘리먼트의 ">"를 마지막 줄 옆에 붙일지 여부
	 * @example
	 * - true - Example:
	 * <button
	 *    className="prettier-class"
	 *    id="prettier-id"
	 *    onClick={this.handleClick}>
	 *    Click Here
	 * </button>
	 *
	 * - false - Example:
	 * <button
	 *   className="prettier-class"
	 *   id="prettier-id"
	 *   onClick={this.handleClick}
	 * >
	 *   Click Here
	 * </button>
	 * @default false
	 */
	bracketSameLine: false,
	/**
	 * 단독 화살표 함수의 매개 변수 주위에 괄호를 자동으로 붙힘
	 * @type {'always' | 'avoid'}
	 * - always - 항상 괄호를 붙힘
	 * - avoid - 필요할 때만 붙힘. 파라미터가 하나이면 붙히지 않음
	 * @default 'always'
	 */
	arrowParens: 'always',
	/**
	 * HTML, JSX, Vue, Angular 엘리먼트의 속성을 한 줄에 하나만 오도록 강제한다.
	 * @default false
	 */
	singleAttributePerLine: false,
};
