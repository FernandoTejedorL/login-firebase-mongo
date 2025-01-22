import { useContext } from 'react';
import { StyledLink } from './menu.styles';
import { AuthContext } from '../../contexts/Auth.context';

const Menu = () => {
	const { user, loading } = useContext(AuthContext);
	return (
		<nav>
			<ul>
				<li>
					<StyledLink to='/'>HOME</StyledLink>
				</li>
				{!user && !loading && (
					<>
						<li>
							<StyledLink to='/login'>LOGIN</StyledLink>
						</li>
						<li>
							<StyledLink to='/register'>REGISTER</StyledLink>
						</li>
					</>
				)}
				{user && (
					<li>
						<StyledLink to='/profile'>PROFILE</StyledLink>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Menu;
