import { Link, useNavigate } from 'react-router-dom';
import cn from 'clsx';
import { menu } from './menu.data.js';

import styles from './Menu.module.scss';
import { useAuth } from '../../../../hooks/useAuth.js';
import Cookies from 'js-cookie';
import { TOKEN } from '../../../../config/constants.js';

const Menu = ({ isShow, setIsShow }) => {
	const { setIsAuth } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		Cookies.remove(TOKEN);
		setIsAuth(false);
		setIsShow(false);
		navigate('/auth');
	};

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.url}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
