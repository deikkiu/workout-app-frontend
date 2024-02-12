import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '../components/screens/screen.components';
import { routerData } from './router.data';
import { useAuth } from '../hooks/useAuth';

const Router = () => {
	const { isAuth } = useAuth();

	return (
		<BrowserRouter>
			<Routes>
				{routerData.map(route => {
					if (route.isAuth && !isAuth) {
						return false;
					}

					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					);
				})}

				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
