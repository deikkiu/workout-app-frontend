import cn from 'clsx';

import Header from '../../layout/header/Header';

import styles from './Exercise.module.scss';
import stylesLayout from '../../layout/Layout.module.scss';

const HeaderExercise = ({ data, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/ex-bg-2.jpg')`,
				height: 300
			}}
		>
			<Header
				backLink={isSuccess ? `/workout/${data.workoutLogId}` : '/workouts'}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={import.meta.env.VITE_SERVER_URL + data.exercise.image}
						height='34'
						alt=''
						draggable={false}
					/>
					<h1 className={stylesLayout.heading}>{data.exercise.name}</h1>
				</div>
			)}
		</div>
	);
};

export default HeaderExercise;
