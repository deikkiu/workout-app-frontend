import { useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Statistics from '../../ui/statistics/Statistics';
import Button from '../../ui/button/Button';

import styles from './Home.module.scss';

const Home = () => {
	const navigate = useNavigate();

	return (
		<Layout bgImage='/images/home-bg_v3.png'>
			<Button clickHandler={() => navigate('/new-workout')} type='main'>
				New
			</Button>

			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>

			<Statistics />
		</Layout>
	);
};

export default Home;
