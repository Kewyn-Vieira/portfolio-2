import styled from 'styled-components'

export default styled.h1`
    color: ${({color, theme}) => color ? color : theme.colors.textPrimary};
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '800'};
    text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
    margin: ${({margin}) => margin};
    font-size: ${({fontSize}) => fontSize};
`