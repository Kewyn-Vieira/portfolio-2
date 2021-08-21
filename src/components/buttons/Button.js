import styled from 'styled-components'

export default styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    border-width: 1px;
    border-style: solid;
    font-size: ${({fontSize}) => fontSize ? fontSize : '14px'};
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '700'};
    cursor: pointer;
    border-color: ${(props) => props.borderColor};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color ? props.color : props.theme.colors.textLight};

    padding: ${(props) => props.padding};
    border-radius: ${(props) => props.borderRadius};
`