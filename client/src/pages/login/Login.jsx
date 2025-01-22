import { signInWithEmailAndPassword } from 'firebase/auth';
import Menu from '../../components/menu/Menu';
import { auth } from '../../config/firebase.config';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Login = () => {
	const navigate = useNavigate();
	const { user, loading } = useContext(AuthContext);
	if (loading) return <h2>Loading...</h2>;
	if (user && !loading) return <Navigate to='/' replace />;
	return (
		<>
			<Menu />
			<h1>Login</h1>
			<form onSubmit={event => loginUser(event, navigate)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' id='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' id='password' />
				</div>
				<input type='submit' value='Login User' />
			</form>
		</>
	);
};

const loginUser = async (event, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		console.log('User Logged');
		event.target.reset();
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Login;
