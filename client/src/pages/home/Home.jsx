import { useContext } from 'react';
import Menu from '../../components/menu/Menu';
import { AuthContext } from '../../contexts/Auth.context';
import { auth } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';

const Home = () => {
	const { user } = useContext(AuthContext);
	return (
		<>
			<Menu />
			<h1>HOME</h1>
			{user && <button onClick={logout}>Sign Out</button>}
		</>
	);
};

const logout = async () => {
	await signOut(auth);
};

export default Home;
