import styled from 'styled-components'

let StyledDiv = styled.div`
    width: ${({width}) => width};
    min-width: ${({minWidth}) => minWidth};
    height: ${({height}) => height};
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    display: flex;
    flex-direction: column;
    align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
    justify-content: ${({justifyContent}) => justifyContent};
    position: ${({position}) => position};
    color: ${({eColor}) => eColor}
`

export default function Column({children, width, minWidth, height, alignItems, justifyContent, margin, padding, position, eColor})
{
    return (
        <StyledDiv 
        width={width}
        minWidth={minWidth}
        height={height}
        alignItems={alignItems}
        justifyContent={justifyContent}
        margin={margin}
        padding={padding}
        eColor={eColor}
        position={position}>
            {children}
        </StyledDiv>
    )
}