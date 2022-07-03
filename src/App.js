import { useState } from 'react';
import randomColor from 'randomcolor';
import { ReactComponent as Logo } from 'assets/images/svg/logo.svg';

const App = () => {
	const [logoColor, setLogoColor] = useState('#61DAFB');

	const changeLogoColor = (e) => {
		e.preventDefault();
		const color = randomColor();
		setLogoColor(color);
	}

	return (
		<div className="App">
			<Logo fill={logoColor} onClick={changeLogoColor} onMouseMove={changeLogoColor}/>
		</div>
	);
}

export default App;
