import styled from 'styled-components'
import Button from './Button'

export default function ButtonPrimary(props)
{
    return (
        <Button
            width={props.width}
            margin={props.margin}
            borderColor={({theme}) => props.borderColor ? props.borderColor : theme.colors.primary}
            color={props.color ? props.color : 'white'} 
            backgroundColor={({theme}) => props.backgroundColor ? props.backgroundColor : theme.colors.primary}
            padding='15px 25px'
            borderRadius='5px'
        >
            {props.children}
        </Button>
    )
}