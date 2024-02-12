import cn from 'clsx';

import styles from '../Exercise.module.scss';

const TableRow = ({ item, getState, onChangeState, toggleTime }) => {
	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: item.isCompleted
			})}
			key={`time ${item.id}`}
		>
			<div
				className={styles.opacity}
				key={`Prev ${item.id}/${item.prevWeight}`}
			>
				<input type='number' defaultValue={item.prevWeight} disabled />
				<i>kg{item.isCompleted ? '' : ' '}/</i>
				<input type='number' defaultValue={item.prevRepeat} disabled />
			</div>

			<div key={`RepeatWeight ${item.id}/${item.weight}`}>
				<input
					type='tel'
					pattern='[0-9]*'
					value={getState(item.id, 'weight')}
					disabled={item.isCompleted}
					onChange={e => onChangeState(item.id, 'weight', e.target.value)}
				/>
				<i>kg{item.isCompleted && ' '}/</i>
				<input
					type='number'
					value={getState(item.id, 'repeat')}
					onChange={e => onChangeState(item.id, 'repeat', e.target.value)}
					disabled={item.isCompleted}
				/>
			</div>

			<div key={`Completed ${item.id}/${item.isCompleted}`}>
				<img
					src={
						getState(item.id, 'isCompleted')
							? '/images/exercises/check-completed.svg'
							: '/images/exercises/check.svg'
					}
					className={styles.checkbox}
					alt=''
					onClick={() => toggleTime(item.id, !item.isCompleted)}
				/>
			</div>
		</div>
	);
};

export default TableRow;
