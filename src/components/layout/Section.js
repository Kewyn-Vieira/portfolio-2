import styled from 'styled-components'

let StyledDiv = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    
    background-color: ${({backgroundColor}) => backgroundColor}
`

export default function Section({children, backgroundColor})
{
    return (
        <StyledDiv backgroundColor={backgroundColor}>{children}</StyledDiv>
    )
}