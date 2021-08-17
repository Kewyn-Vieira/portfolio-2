import styled from 'styled-components'

let StyledButton = styled.button`
padding: 15px 25px;
border-radius: 5px;
border-width: 1px;
border-style: solid;
border-color: ${(props) => props.borderColor};
font-size: 20px;
font-weight: 700;
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
`

export default function ButtonPrimary(props)
{
    return (
        <StyledButton
            borderColor={({theme}) => props.borderColor ? props.borderColor : theme.colors.primary}
            color={props.color ? props.color : 'white'} 
            backgroundColor={({theme}) => props.backgroundColor ? props.backgroundColor : theme.colors.primary}
        >
            {props.children}
        </StyledButton>
    )
}