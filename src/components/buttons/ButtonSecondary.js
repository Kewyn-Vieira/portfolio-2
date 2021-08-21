import styled from 'styled-components'
import Button from './Button'

export default function ButtonPrimary({children, width, margin, borderColor, color, backgroundColor})
{
    return (
        <Button
            width={width}
            margin={margin}
            borderColor={({theme}) => borderColor ? borderColor : theme.colors.primary}
            color={color} 
            backgroundColor={({theme}) => backgroundColor ? backgroundColor : theme.colors.primary}
            padding='15px 25px'
            borderRadius='5px'
        >
            {children}
        </Button>
    )
}