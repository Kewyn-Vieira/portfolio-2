import styled from 'styled-components'

let StyledDiv = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    display: flex;
    flex-direction: column;
    align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
    justify-content: ${({justifyContent}) => justifyContent};
    position: ${({position}) => position};
    color: ${({color}) => color}
`

export default function Column({children, width, height, alignItems, justifyContent, margin, padding, position, color})
{
    return (
        <StyledDiv 
        width={width}
        height={height}
        alignItems={alignItems}
        justifyContent={justifyContent}
        margin={margin}
        padding={padding}
        color={color}
        position={position}>
            {children}
        </StyledDiv>
    )
}