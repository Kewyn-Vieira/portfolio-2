import styled from 'styled-components'

let StyledDiv = styled.div`
    width: 100%;
    
    display: ${({display}) => display ? display : 'flex'};
    justify-content: center;
    
    background-color: ${({backgroundColor}) => backgroundColor}
`

export default function Section({children, backgroundColor, className, display})
{
    return (
        <StyledDiv display={display} backgroundColor={backgroundColor} className={className}>{children}</StyledDiv>
    )
}