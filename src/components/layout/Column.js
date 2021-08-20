import styled from 'styled-components'

let StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.alignItems ? props.alignItems : 'center'}
`

export default function Column(props)
{
    return (
        <StyledDiv alignItems={props.alignItems}>{props.children}</StyledDiv>
    )
}