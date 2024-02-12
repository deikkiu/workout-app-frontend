import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import { useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';

const NotFound = () => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) navigate('/auth');
	}, []);

	return (
		<Layout heading='Page Not Found'>
			<div className='wrapper-inner-page'>404 page not found</div>
		</Layout>
	);
};

export default NotFound;
