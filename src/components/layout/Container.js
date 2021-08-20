import styled from 'styled-components'

let StyledDiv = styled.div`
    width: 80%;
    max-width: 1080px;
    padding: 64px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Container(props)
{
    return (
        <StyledDiv>{props.children}</StyledDiv>
    )
}