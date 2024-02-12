import { HiMenuAlt3 } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';

import styles from './Burger.module.scss';
import Menu from './menu/Menu';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

const Burger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false);

	return (
		<div className={styles.wrapper} ref={ref}>
			<button aria-label='Open menu' onClick={() => setIsShow(!isShow)}>
				{isShow ? <GrFormClose /> : <HiMenuAlt3 />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	);
};

export default Burger;
