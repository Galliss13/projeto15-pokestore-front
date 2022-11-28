import Container from "../../components/Container";
import Logo from "../../components/Logo";
import { Cartdiv, Caption, Product, Image, Name, Amount, Price } from "./style";

export default function Cart() {
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
                <Product>
                    <Image></Image>
                    <Name></Name>
                    <Amount></Amount>
                    <Price></Price>
                </Product>
            </Cartdiv>
        </Container>
    )
};
