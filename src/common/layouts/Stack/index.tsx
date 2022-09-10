import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './stack.module.scss';

export interface StackProps extends React.HTMLProps<HTMLDivElement> {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    alignItems?: 'flex-start' | 'flex-end' | 'start' | 'end' | 'center' | 'stretch';
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'start'
        | 'end'
        | 'center'
        | 'stretch'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    gap?: number | string;
}

const Stack = forwardRef<HTMLDivElement, StackProps>(
    ({ style, className, justifyContent, children, direction, gap = 0, alignItems, ...props }, ref) => {
        return (
            <div
                ref={ref}
                style={{
                    ...(gap && { gap }),
                    alignItems,
                    justifyContent,
                    ...style,
                    display: 'flex',
                }}
                className={classNames({
                    [className || '']: true,
                    [styles.asRow]: direction === 'row',
                    [styles.asCol]: direction === 'column',
                    [styles.asColR]: direction === 'column-reverse',
                })}
                {...props}
            >
                {children}
            </div>
        );
    },
);

Stack.displayName = 'Stack';

export default Stack;
