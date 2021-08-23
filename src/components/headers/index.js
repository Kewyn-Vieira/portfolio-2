import styled, {css} from 'styled-components'

let style = (props) => css`
    color: ${({color, theme}) => color ? color : theme.colors.textPrimary};
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '800'};
    text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
    margin: ${({margin}) => margin};
    font-size: ${({fontSize}) => fontSize};

    @media(max-width: 608px)
    {
        text-align: ${({wrapTextAlign}) => wrapTextAlign}
    }
`

let StyledH1 = styled.h1`
    ${style}
`

let StyledH2 = styled.h2`
    ${style}
`

let StyledH3 = styled.h3`
    ${style}
`

let StyledH4 = styled.h4`
    ${style}
`

let StyledH5 = styled.h5`
    ${style}
`

export default {
    StyledH1,
    StyledH2,
    StyledH3,
    StyledH4,
    StyledH5,
}