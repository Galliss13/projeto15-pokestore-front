import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { white } from "../../constants/colors";



export default function Store() {
const [data, setData] = useState([])
const [typeProducts, setTypeProducts] = useState([])
const [takeInfo, setTakeInfo] = useState("")

useEffect(() => {
  const config = {
    headers: {
      // Authorization: `Bearer ${token}`
    },
  };

  axios
    .get("http://localhost:5000/store", config)
    .then((res) => {
      console.log(res.data);
      setData(res.data.isUser);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
    
  useEffect(() => {
    setTypeProducts([]);
    data.forEach((product) => {
      if (product.type === takeInfo) {
        setTypeProducts((prev) => [...prev, product]);
      }
    });
  }, [takeInfo, data]);

  return (
    <Conteiner>
      <Sidebar>
        <TypeItens onClick={() => setTakeInfo("pokeball")}>a</TypeItens>
        <TypeItens onClick={() => setTakeInfo("potion")}>a</TypeItens>
        <TypeItens onClick={() => setTakeInfo("item")}>a</TypeItens>
      </Sidebar>
      <DisplayConteiner>
        <LayoutStore>
          {takeInfo === "" ? <p>Selecione uma categoria</p> :
            typeProducts.map((el, index) => {
              const {_id, type, value, name, description, img} = el;
              return(
                <DivStore>{name}</DivStore>
              )
            })
          }
        </LayoutStore>
        <ConteinerInfos>
          <Comments>COMMENT QUESTION</Comments>
          <ConfirmPurchases>Finalizar compra</ConfirmPurchases>
        </ConteinerInfos>
      </DisplayConteiner>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 15px;
  background-color: #b9030f;
`;

const Sidebar = styled.div`
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;
const TypeItens = styled.div`
  /* width: px; */
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6d2928;
  margin-bottom: 15px;
  border: none;
  border-radius: 20px;
  box-shadow: 10px 10px 15px black;
`;
const DisplayConteiner = styled.div`
  display: flex;
  flex-direction: column;
`;
const LayoutStore = styled.div`
  width: 63vw;
  height: 70vh;
  background-color: #e6e6e6;
  box-shadow: 10px 10px 15px black;
  margin-bottom: 15px;
  border: none;
  border-radius: 20px;
  padding: 10px;
`;

const DivStore = styled.div `
  width: 200px;
  height: 100px;
  display: flex;

`
const ConteinerInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const Comments = styled.div`
    margin-top: 20px;
  width: 400px;
  height: 110px;
  background-color: ${white};
  border: 5px solid black;
  border-radius: 20px;

  h1 {
    font-family: "Times New Roman", Times, serif;
    font-size: 16px;
    color: #000000;
  }
`;

const ConfirmPurchases = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 20px;
  box-shadow: 10px 10px 15px black;
  background-color: green;
`;
