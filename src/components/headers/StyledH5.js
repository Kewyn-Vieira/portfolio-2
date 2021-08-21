import styled from 'styled-components'

export default styled.h5`
    color: ${(props) => props.color ? props.color : props.theme.colors.textPrimary};
    font-weight: ${({fontWeight}) => fontWeight};
    text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
    margin: ${(props) => props.margin};
    font-size: ${(props) => props.fontSize};
`