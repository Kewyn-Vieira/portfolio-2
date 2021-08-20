import styled from 'styled-components'

let StyledDiv = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    
    background-color: ${(props) => props.backgroundColor}
`

export default function Section(props)
{
    return (
        <StyledDiv backgroundColor={props.backgroundColor}>{props.children}</StyledDiv>
    )
}