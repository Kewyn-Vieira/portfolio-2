import styled from 'styled-components'
import Button from './Button'

export default function ButtonSecondary({children, width, margin, borderColor, eColor, backgroundColor})
{
    return (
        <Button
            width={width}
            margin={margin}
            borderColor={({theme}) => borderColor ? borderColor : theme.colors.primary}
            eColor={eColor} 
            backgroundColor={({theme}) => backgroundColor ? backgroundColor : theme.colors.primary}
            padding='15px 25px'
            borderRadius='5px'
        >
            {children}
        </Button>
    )
}