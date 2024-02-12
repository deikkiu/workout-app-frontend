import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useMemo } from 'react';

import WorkoutService from '../../../service/workout/workout.service';

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	});

	const { mutate, isSuccess, error, isLoading } = useMutation({
		mutationFn: body => WorkoutService.create(body),
		onSuccess: () => {
			reset();
		}
	});

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exercisesIds.map(exercise => exercise.value)
		});
		reset();
	};

	return useMemo(
		() => ({
			isSuccess,
			error,
			isLoading,
			register,
			handleSubmit,
			errors,
			onSubmit,
			control
		}),
		[isSuccess, error, isLoading, errors]
	);
};
