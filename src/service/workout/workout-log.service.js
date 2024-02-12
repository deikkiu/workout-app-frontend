import { $axios } from '../../api';

const WORKOUTS_LOG = '/workouts/log';

class WorkoutLogService {
	async getById(id) {
		return $axios.get(`${WORKOUTS_LOG}/${id}`);
	}

	async create(workoutId) {
		return $axios.post(`${WORKOUTS_LOG}/${workoutId}`);
	}

	// isCompleted
	async complete(id) {
		return $axios.patch(`${WORKOUTS_LOG}/complete/${id}`);
	}
}

export default new WorkoutLogService();
