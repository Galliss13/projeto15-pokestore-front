import Container from "../../components/Container";
import Logo from "../../components/Logo";
import { Cartdiv, Caption, Product, Name, Amount, Price } from "./style";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function Cart() {

    const {auth} =useContext(AuthContext)

    const products = () => {
        const promise = axios.get("/cart", { headers: { Authorization: `Bearer ${auth.token}` } })
        let products
        promise.then(res => {
            products = res.data
        })
        promise.catch(err => {
            console.log(err)
        })
        return products
    }

    return (
        <Container>
            <Logo/>
            <Cartdiv>
                <Caption>
                    <span>Imagem</span>
                    <span>Nome</span>
                    <span>Quantidade</span>
                    <span>Preço</span>
                </Caption>
                {products ? products.map((p) => {
                <Product>
                    <img src={products.image} alt={products.description}/>
                    <Name>{products.name}</Name>
                    <Amount>{products.amount}</Amount>
                    <Price>{products.price}</Price>
                </Product>
                }) : 'deu ruim com a API'}
            </Cartdiv>
        </Container>
    )
};
