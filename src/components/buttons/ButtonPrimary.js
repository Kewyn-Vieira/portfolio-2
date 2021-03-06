import Button from './Button'

export default function ButtonPrimary({children, width, margin, borderColor, eColor, backgroundColor})
{
    return (
        <Button
            width={width}
            margin={margin}
            borderColor={({theme}) => borderColor ? borderColor : theme.colors.primary}
            eColor={eColor} 
            backgroundColor={({theme}) => backgroundColor ? backgroundColor : theme.colors.primary}

            padding='15px 36px'
            borderRadius='37px'
        >
            {children}
        </Button>
    )
}