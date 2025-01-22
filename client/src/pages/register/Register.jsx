import { createUserWithEmailAndPassword } from 'firebase/auth';
import Menu from '../../components/menu/Menu';
import { auth } from '../../config/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { Navigate, useNavigate } from 'react-router-dom';
import { createData } from '../../utils/api';

const Register = () => {
	const navigate = useNavigate();
	const { user, loading } = useContext(AuthContext);
	if (loading) return <h2>Loading...</h2>;
	if (user) return <Navigate to='/' replace />;
	return (
		<>
			<Menu />
			<h1>Register</h1>
			<form onSubmit={event => registerUser(event, navigate)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' id='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' id='password' />
				</div>
				<div>
					<label htmlFor='userProfile'>User</label>
					<input type='radio' name='profile' value='user' id='userProfile' />
				</div>
				<div>
					<label htmlFor='adminProfile'>Admin</label>
					<input type='radio' name='profile' value='admin' id='userProfile' />
				</div>
				<input type='submit' value='Register User' />
			</form>
		</>
	);
};

const registerUser = async (event, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	try {
		const newUser = {
			email: event.target.email.value,
			profile: event.target.profile.value
		};
		await createUserWithEmailAndPassword(auth, email, password);
		await createData(newUser);
		console.log('User Registered');
		event.target.reset();
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Register;
