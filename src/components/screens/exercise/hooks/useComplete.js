import { useMutation } from '@tanstack/react-query';
import ExerciseLogService from '../../../../service/exercise/exercise-log.service';
import { useNavigate, useParams } from 'react-router-dom';

export const useComplete = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { mutate, error: errorCompleted } = useMutation({
		mutationKey: ['complete log'],
		mutationFn: body => ExerciseLogService.complete(id, body),
		onSuccess: ({ data }) => navigate(`/workout/${data.workoutLogId}`)
	});

	return { completeLog: mutate, errorCompleted };
};
