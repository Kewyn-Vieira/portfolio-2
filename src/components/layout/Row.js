import styled from 'styled-components'

let StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'space-evenly'};
`

export default function Row(props)
{
    return (
        <StyledDiv>{props.children}</StyledDiv>
    )
}