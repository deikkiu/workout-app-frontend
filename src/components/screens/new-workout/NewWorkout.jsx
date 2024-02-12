import { useNewWorkout } from './useNewWorkout';
import { useListExercises } from './useListExercises';
import { Link } from 'react-router-dom';

import Layout from '../../layout/Layout';
import {
	Alert,
	Button,
	Field,
	Loader,
	SelectExercises
} from '../../ui/ui.components';

const NewWorkout = () => {
	const {
		isSuccess,
		error,

		register,
		handleSubmit,
		errors,
		onSubmit,
		control
	} = useNewWorkout();

	const { data, isLoading } = useListExercises();
	if (isLoading) <Loader />;

	return (
		<>
			<Layout
				bgImage='/images/new-workout-bg.jpg'
				heading='Create new workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully!' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						register={register}
						name='name'
						options={{ required: 'Name is required' }}
						type='text'
						placeholder='Enter name'
					/>

					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>

					<SelectExercises control={control} data={data} />

					<Button>Create</Button>
				</form>
			</div>
		</>
	);
};

export default NewWorkout;
