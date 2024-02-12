import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useAuth } from '../../../hooks/useAuth';

import AuthService from '../../../service/auth.service';

export const useAuthPage = () => {
	const [type, setType] = useState('login');

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	});

	const { isAuth, setIsAuth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth) navigate('/');
	}, [isAuth]);

	const { mutate, isLoading } = useMutation({
		mutationFn: ({ email, password, name = '' }) =>
			AuthService.main(type, email, password, name),
		onSuccess: () => {
			setIsAuth(true);
		}
	});

	const onSubmit = data => {
		mutate(data);
		reset();
	};

	return useMemo(
		() => ({
			type,
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit
		}),
		[errors, isLoading, type]
	);
};
