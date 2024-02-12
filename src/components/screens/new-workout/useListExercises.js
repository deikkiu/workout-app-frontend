import { useQuery } from '@tanstack/react-query';
import ExerciseService from '../../../service/exercise/exercise.service';

export const useListExercises = () =>
	useQuery({
		queryKey: ['list exercises'],
		queryFn: () => ExerciseService.getAll(),
		select: ({ data }) => data
	});
