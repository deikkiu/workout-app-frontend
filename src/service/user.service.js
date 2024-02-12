import { $axios } from '../api';

class UserService {
	async getProfile() {
		return $axios('/users/profile');
	}
}

export default new UserService();
