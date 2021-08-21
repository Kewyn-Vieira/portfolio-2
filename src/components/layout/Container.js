import styled from 'styled-components'

let StyledDiv = styled.div`
    width: 80%;
    max-width: 1080px;
    padding: ${({padding}) => padding ? padding : '64px 0'};

    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Container({children, padding})
{
    return (
        <StyledDiv padding={padding}>{children}</StyledDiv>
    )
}