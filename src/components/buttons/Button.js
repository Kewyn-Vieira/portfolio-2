import styled from 'styled-components'

export default styled.button`
    width: ${({width}) => width};
    height: ${({height}) => height};
    margin: ${({margin}) => margin};
    border-width: 1px;
    border-style: solid;
    font-size: ${({fontSize}) => fontSize ? fontSize : '14px'};
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '700'};
    cursor: pointer;
    border-color: ${({borderColor}) => borderColor};
    background-color: ${({backgroundColor}) => backgroundColor};
    color: ${({color, theme}) => color ? color : theme.colors.textLight};

    padding: ${({padding}) => padding};
    border-radius: ${({borderRadius}) => borderRadius};
`