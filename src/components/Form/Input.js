import styled from "styled-components";

const Input = styled.input`
    position: relative;
    margin: 5px;
    width: 300px;
    height: 45px;
    padding-left: 10px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    font-family: 'Permanent Marker', cursive;
    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`
export default Input