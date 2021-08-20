import styled from 'styled-components'

export default styled.h5`
    color: ${({theme}) => theme.colors.textPrimary};
    text-align: center;
    margin: ${(props) => props.margin};
    font-size: ${(props) => props.fontSize};
`