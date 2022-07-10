import { useState } from 'react';
import randomColor from 'randomcolor';

const App = () => {
	const [textCount, setTextCount] = useState(10);

	const makeRandomStyle = () => {
		return {
			position: 'absolute',
			top: `${Math.min(Math.round(Math.random() * 60), 80)}%`,
			left: `${Math.min(Math.round(Math.random() * 60), 80)}%`,
			fontSize: `${Math.round(Math.random() * 10)}rem`,
			color: randomColor(),
		}
	}

	const changeRandom = (e) => {
		e.preventDefault();
		setTextCount(Math.round(Math.random() * 50));
	}

	return (
		<div className="App" style={{ height: '100vh', overflow: 'hidden' }} onClick={changeRandom} onMouseMove={changeRandom}>
			{Array(textCount).fill(0).map((_, i) => <span key={i} style={makeRandomStyle()}>준비중입니다.</span>)}
		</div>
	);
}

export default App;
