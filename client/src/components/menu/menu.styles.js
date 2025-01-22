import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
	display: block;
	font-size: 18px;
	padding-inline: 20px;
	margin-bottom: 8px;
`;

// Link para navegación sin saber el menu activo
// NavLink para navegación sabiendo el menu activo

export { StyledLink };
