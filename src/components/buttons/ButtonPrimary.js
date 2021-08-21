import Button from './Button'

export default function ButtonPrimary(props)
{
    return (
        <Button
            width={props.width}
            margin={props.margin}
            borderColor={({theme}) => props.borderColor ? props.borderColor : theme.colors.primary}
            color={props.color} 
            backgroundColor={({theme}) => props.backgroundColor ? props.backgroundColor : theme.colors.primary}

            padding='15px 36px'
            borderRadius='37px'
        >
            {props.children}
        </Button>
    )
}