import React from 'react';
import './Button.less'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZE = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZE[0]

return (
    <button
     className={`btn ${checkButtonStyle} ${checkButtonSize}`}
     onClick={onClick}
    type={type}>
        {children}
    </button>
)
}

