import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import Burger from '../burger/Burger';

import { IoMdArrowBack } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';

import styles from './Header.module.scss';

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			{pathname === '/' && isAuth ? (
				<button aria-label='Go to profile' onClick={() => navigate('/profile')}>
					<AiOutlineUser />
				</button>
			) : pathname !== '/auth' ? (
				<button
					aria-label='Go back'
					onClick={() => navigate(isAuth ? backLink : '/auth')}
				>
					<IoMdArrowBack />
				</button>
			) : (
				''
			)}
			{isAuth && <Burger />}
		</header>
	);
};

export default Header;
