import { Loader, Alert } from '../../ui/ui.components';

import { useExercise } from './hooks/useExercise';

import HeaderExercise from './HeaderExercise';
import TableHeader from './table/TableHeader';
import TableRow from './table/TableRow';
import ExerciseError from './ExerciseError';

import styles from './Exercise.module.scss';

const ExerciseLog = () => {
	const {
		data,
		isSuccess,
		isLoading,
		error,
		getState,
		toggleTime,
		onChangeState
	} = useExercise();

	return (
		isSuccess && (
			<>
				<HeaderExercise data={data} isSuccess={isSuccess} />
				<div
					className='wrapper-inner-page'
					style={{ paddingLeft: 0, paddingRight: 0 }}
				>
					<ExerciseError errors={[error]} />
					{isLoading ? (
						<Loader />
					) : (
						<div className={styles.wrapper}>
							<TableHeader />
							{data?.times.map(item => (
								<TableRow
									getState={getState}
									onChangeState={onChangeState}
									toggleTime={toggleTime}
									item={item}
									key={item.id}
								/>
							))}
						</div>
					)}

					{isSuccess && data?.times?.length === 0 && (
						<Alert type='warning' text='Times not found' />
					)}
				</div>
			</>
		)
	);
};

export default ExerciseLog;
