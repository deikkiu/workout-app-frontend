import { useNavigate } from 'react-router-dom';
import cn from 'clsx';

import styles from '../../screens/workout/Workout.module.scss';

const ExerciseItem = ({ exerciseLog }) => {
	const navigate = useNavigate();

	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => navigate(`/exercise/${exerciseLog.id}`)}
			>
				<span>{exerciseLog?.exercise?.name}</span>
				<img
					src={import.meta.env.VITE_SERVER_URL + exerciseLog?.exercise?.image}
					height='34'
					alt=''
					draggable={false}
				/>
			</button>
		</div>
	);
};

export default ExerciseItem;
