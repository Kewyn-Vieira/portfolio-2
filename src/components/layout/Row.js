import styled from 'styled-components'

let StyledDiv = styled.div`
    width: ${({width}) => width ? width : '100%'};
    height: ${({height}) => height};
    display: flex;
    flex-wrap: ${({flexWrap}) => flexWrap ? flexWrap : 'wrap'};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'space-evenly'};
    align-items: ${({alignItems}) => alignItems ? alignItems : 'space-evenly'};
`

export default function Row({children, width, justifyContent, alignItems, height, flexWrap})
{
    return (
        <StyledDiv 
        width={width}
        height={height} 
        justifyContent={justifyContent} 
        alignItems={alignItems}
        flexWrap={flexWrap}>
            {children}
        </StyledDiv>
    )
}