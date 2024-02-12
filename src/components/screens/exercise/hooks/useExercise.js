import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import ExerciseLogService from '../../../../service/exercise/exercise-log.service';

import { useUpdateTime } from './useUpdateTime';

export const useExercise = () => {
	const { id } = useParams();
	const [times, setTimes] = useState([]);

	const { data, isSuccess, isLoading } = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogService.getById(id),
		select: ({ data }) => data
	});

	useMemo(() => {
		if (isSuccess && data?.times?.length) setTimes(data.times);
	}, [isSuccess, data]);

	const { updateTime, error } = useUpdateTime(times);

	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value };
			}

			return time;
		});

		setTimes(newTimes);
	};

	const getTime = timeId => {
		return times.find(time => time.id === timeId);
	};

	const getState = (timeId, key) => {
		const time = getTime(timeId);
		return time ? time[key] : key === 'isCompleted' ? false : 0;
	};

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId);
		updateTime({
			timeId,
			body: {
				isCompleted,
				repeat: +time.repeat,
				weight: +time.weight
			}
		});
	};

	return {
		data,
		isSuccess,
		isLoading,
		error,
		getState,
		toggleTime,
		onChangeState
	};
};
