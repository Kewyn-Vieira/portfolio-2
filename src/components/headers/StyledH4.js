import styled from 'styled-components'

export default styled.h4`
    color: ${({color, theme}) => color ? color : theme.colors.textPrimary};
    font-weight: ${({fontWeight}) => fontWeight};
    text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
    margin: ${({margin}) => margin};
    font-size: ${({fontSize}) => fontSize};

    @media(max-width: 608px)
    {
        text-align: ${({wrapTextAlign}) => wrapTextAlign}
    }
`