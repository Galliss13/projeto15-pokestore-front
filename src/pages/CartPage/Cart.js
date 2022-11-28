import Container from "../../components/Container";
import Logo from "../../components/Logo";
import { Cartdiv, Caption, Product, Name, Amount, Price } from "./style";
import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function Cart() {
    const [cartProducts, setCartProducts] = useState(undefined)
    const {auth} =useContext(AuthContext)

    const getCartProducts = () => {
        const promise = axios.get("/cart", { headers: { Authorization: `Bearer ${auth.token}` } })
        promise.then(res => {
            setCartProducts(res.data)
        })
        promise.catch(err => {
            console.log(err)
        })
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
                {cartProducts ? cartProducts.map((p) => (
                <Product>
                    <img src={p.image} alt={p.description}/>
                    <Name>{p.name}</Name>
                    <Amount>{p.amount}</Amount>
                    <Price>{p.price}</Price>
                </Product>
                )) : 'deu ruim com a API'}
            </Cartdiv>
        </Container>
    )
};
