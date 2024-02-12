import { useAuthPage } from './useAuthPage';
import Layout from '../../layout/Layout';
import { Button, Field, Loader } from '../../ui/ui.components';

import styles from './Auth.module.scss';

const Auth = () => {
	const { type, setType, register, handleSubmit, errors, isLoading, onSubmit } =
		useAuthPage();

	return (
		<>
			<Layout
				heading={type === 'login' ? 'Sign In' : 'Sign Up'}
				bgImage='/images/auth-bg_v2.jpg'
			/>
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					{type === 'register' ? (
						<Field
							error={errors?.name?.message}
							register={register}
							name='name'
							options={{ required: 'Name is required' }}
							type='text'
							placeholder='Enter name'
						/>
					) : null}
					<Field
						error={errors?.email?.message}
						register={register}
						name='email'
						options={{ required: 'Email is required' }}
						type='text'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						register={register}
						name='password'
						options={{ required: 'Password is required' }}
						type='password'
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button>{type === 'login' ? 'Sign In' : 'Sign Up'}</Button>
						<Button
							clickHandler={event => {
								event.preventDefault();
								type === 'login' ? setType('register') : setType('login');
							}}
						>
							{type === 'login' ? 'Register' : 'Login'}
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Auth;
