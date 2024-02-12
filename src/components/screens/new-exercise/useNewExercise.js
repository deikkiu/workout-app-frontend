import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import ExerciseService from '../../../service/exercise/exercise.service';

export const useNewExercise = () => {
	const { mutate, isSuccess, error, isLoading } = useMutation({
		mutationFn: body => ExerciseService.create(body),
		onSuccess: () => {
			reset();
		}
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	});

	const onSubmit = data => {
		mutate(data);
		reset();
	};

	return {
		isSuccess,
		error,
		isLoading,
		register,
		handleSubmit,
		errors,
		control,
		onSubmit
	};
};
