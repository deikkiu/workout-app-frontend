import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';
import { useEffect } from 'react';
import { TOKEN } from '../config/constants';

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth();
	const { pathname } = useLocation();

	useEffect(() => {
		const token = Cookies.get(TOKEN);
		if (!token) setIsAuth(false);
	}, [pathname, isAuth]);
};
