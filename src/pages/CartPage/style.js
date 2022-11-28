import styled from "styled-components";
import { white } from "../../constants/colors";

const Cartdiv = styled.div`
    position: absolute;
    left: 5%;
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 800px;
    height: 800px;
    border-radius: 20px;
    box-shadow: 10px 10px 15px black;
    background-color: ${white};
`
const Caption = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Permanent Marker', cursive;

`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
`

const Name = styled.p`
    margin-right: 60px;
`

const Amount = styled.p`
    margin-right: 60px;
`

const Price = styled.p`
    margin-right: 10px;
`

export {
    Cartdiv,
    Caption,
    Product,
    Name,
    Amount,
    Price
}