import { Controller } from 'react-hook-form';
import cn from 'clsx';

import Layout from '../../layout/Layout';
import { Alert, Button, Field, Loader } from '../../ui/ui.components';

import { useNewExercise } from './useNewExercise';
import { getImagePath } from './image-path.utils';

import styles from './NewExercise.module.scss';

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back'];

const NewExercise = () => {
	const {
		isSuccess,
		error,
		isLoading,
		register,
		handleSubmit,
		errors,
		control,
		onSubmit
	} = useNewExercise();

	return (
		<>
			<Layout
				bgImage='/images/new-exercise-bg.jpg'
				heading='Create new exercise'
				backLink='/new-workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created!' />}
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
					<Field
						error={errors?.times?.message}
						register={register}
						type='number'
						name='times'
						options={{ required: 'Times is required', valueAsNumber: true }}
						placeholder='Enter times'
					/>

					<Controller
						name='image'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getImagePath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getImagePath(name)
										})}
										onClick={() => onChange(getImagePath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>

					{errors?.image && (
						<div className={styles.error}>{errors?.image?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	);
};

export default NewExercise;
