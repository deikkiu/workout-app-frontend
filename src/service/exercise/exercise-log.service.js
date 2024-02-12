import { $axios } from '../../api';

const EXERCISES_LOG = '/exercises/log';

class ExerciseLogService {
	async getById(id) {
		return $axios.get(`${EXERCISES_LOG}/${id}`);
	}

	async create(exerciseId) {
		return $axios.post(`${EXERCISES_LOG}/${exerciseId}`);
	}

	// weight, repeat, isCompleted
	async updateTime(exerciseLogId, body) {
		return $axios.put(`${EXERCISES_LOG}/time/${exerciseLogId}`, body);
	}

	// isCompleted
	async complete(timeId, body) {
		return $axios.patch(`${EXERCISES_LOG}/complete/${timeId}`, body);
	}
}

export default new ExerciseLogService();
