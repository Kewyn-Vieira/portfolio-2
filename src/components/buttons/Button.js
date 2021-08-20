import styled from 'styled-components'

export default styled.button`
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    border-width: 1px;
    border-style: solid;
    font-size: 20px;
    font-weight: 700;
    border-color: ${(props) => props.borderColor};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color ? props.color : 'white'};

    padding: ${(props) => props.padding};
    border-radius: ${(props) => props.borderRadius};
`