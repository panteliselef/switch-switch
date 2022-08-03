import React, {createElement} from "react";
import styles from './fluidContainer.module.scss';

interface ContainerProps extends React.HTMLProps<HTMLElement> {
	as?: string
}

const FluidContainer: React.FC<ContainerProps> = ({as = 'div', children, ...props}) => {
	return createElement(
		as,
		{
			...props,
			className: `${styles.fluid_container} ${props.className || ''}`,
		},
		children
	)
}

export default FluidContainer;