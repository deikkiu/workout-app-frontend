import { useQuery } from '@tanstack/react-query';
import UserService from '../../../service/user.service';

export const useProfile = () => {
	return useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data
	});
};
