import { useMutation, useQueryClient } from '@tanstack/react-query';

import ExerciseLogService from '../../../../service/exercise/exercise-log.service';

import { useParams } from 'react-router-dom';
import { useComplete } from './useComplete';

export const useUpdateTime = times => {
	const queryClient = useQueryClient();
	const { id } = useParams();
	const { completeLog, errorCompleted } = useComplete();

	const { mutate, error: errorChange } = useMutation({
		mutationKey: ['update log time'],
		mutationFn: ({ timeId, body }) =>
			ExerciseLogService.updateTime(timeId, body),
		onSuccess: () => {
			queryClient
				.invalidateQueries({ queryKey: ['get exercise log', id] })
				.then(() => {
					const filterCompletedTimes = times.filter(time => time.isCompleted);

					if (filterCompletedTimes.length === times.length - 1) {
						completeLog({ isCompleted: true });
					}
				});
		}
	});

	return { updateTime: mutate, error: errorChange || errorCompleted };
};
