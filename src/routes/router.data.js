import {
	Auth,
	Exercise,
	Home,
	Workouts,
	NewExercise,
	NewWorkout,
	Profile,
	Workout
} from '../components/screens/screen.components';

export const routerData = [
	{
		path: '/',
		isAuth: true,
		component: Home
	},
	{
		path: '/auth',
		isAuth: false,
		component: Auth
	},
	{
		path: '/new-workout',
		isAuth: true,
		component: NewWorkout
	},
	{
		path: '/profile',
		isAuth: true,
		component: Profile
	},
	{
		path: '/new-exercise',
		isAuth: true,
		component: NewExercise
	},
	{
		path: '/exercise/:id',
		isAuth: true,
		component: Exercise
	},
	{
		path: '/workouts',
		isAuth: true,
		component: Workouts
	},
	{
		path: '/workout/:id',
		isAuth: true,
		component: Workout
	}
];
