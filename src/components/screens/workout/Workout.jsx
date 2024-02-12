import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import cn from 'clsx';
import WorkoutLogService from '../../../service/workout/workout-log.service';

import Header from '../../layout/header/Header';
import { Loader, ExerciseItem, Button } from '../../ui/ui.components';

import stylesLayout from '../../layout/Layout.module.scss';
import styles from './Workout.module.scss';

const Workout = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get workout log'],
		queryFn: () => WorkoutLogService.getById(id),
		select: ({ data }) => data
	});

	const { mutate } = useMutation({
		mutationKey: ['complete workout'],
		mutationFn: () => WorkoutLogService.complete(id),
		onSuccess: () => navigate('/workouts')
	});

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/home-bg_v3.png')`,
					height: 356
				}}
			>
				<Header backLink='/workouts' />

				{isSuccess && (
					<div>
						<time className={styles.time}>{`${workoutLog.minute} min`}</time>
						<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}></div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs.map(exerciseLog => (
							<ExerciseItem
								key={`exerciseLog_${exerciseLog.id}`}
								exerciseLog={exerciseLog}
							/>
						))}
					</div>
				)}
			</div>
			<Button clickHandler={() => mutate()}>Complete workout</Button>
		</>
	);
};

export default Workout;
