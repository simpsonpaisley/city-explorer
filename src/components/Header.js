import Logo from '../images/logo.svg';

function Header() {
	return (
		<div className="header">
			<img
				src={Logo}
				className="logo"
				alt="logo"></img>
			<h1>City Explorer</h1>
		</div>
	);
}

export default Header;
