import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Store() {
const [data, setData] = useState([])
const [typeProducts, setTypeProducts] = useState([])
const [takeInfo, setTakeInfo] = useState("")
const [descriptions, setDescriptions] = useState("")
const [sendArray, setSendArray] = useState("")

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
    data.forEach((prod) => {
      if (prod.type === takeInfo) {
        setTypeProducts((prev) => [...prev, prod]);
      }
    });
  }, [takeInfo, data]);

  function addInArray(item) {
    const addArray = sendArray.some((prod) => prod.id === item.id)
    if (!addArray) {
        const newArray = [...sendArray, item]
        setSendArray(newArray)
    }
}

  return (
    <Conteiner>
      <Sidebar>
        <TypeItens onClick={() => setTakeInfo("pokeball")}>a</TypeItens>
        <TypeItens onClick={() => setTakeInfo("potion")}>a</TypeItens>
        <TypeItens onClick={() => setTakeInfo("item")}>a</TypeItens>
        <TypeItens onClick={() => setTakeInfo("item")}>a</TypeItens>
      </Sidebar>
      <DisplayConteiner>
        <LayoutStore>
          {takeInfo === "" ? <p>Selecione uma categoria</p> :
            typeProducts.map((el, index) => {
              const {_id, type, value, name, description, img} = el;
              return(
                <DivStore>
                  <img src={img} alt="logo"/>
                  <h1>{name}</h1>
                  <span>{value}</span>
                </DivStore>
              )
            })
          }
        </LayoutStore>
        <ConteinerInfos>
          <Comments>COMMENT QUESTION
          {/* <span>{description}</span> */}
          </Comments>
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
`;
const DisplayConteiner = styled.div`
  display: flex;
  flex-direction: column;
`;
const LayoutStore = styled.div`
  width: 63vw;
  height: 70vh;
  background-color: #e6e6e6;
  box-shadow: rgb(2, 2, 2);
  margin-bottom: 15px;
  border: 5px solid black;
  padding: 10px;
`;

const DivStore = styled.div `
  width: 300px;
  height: 200px;
  display: flex;
  

  img {
    width: 70px;
    height: 50px;
  }

  h1 {
    font-family: 'Permanent Marker', cursive;
    font-size: 16px;
    font-weight: bold;
  }
  
  span {
    font-family: 'Permanent Marker', cursive;
    font-size: 18px;
  }



`
const ConteinerInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const Comments = styled.div`
  width: 400px;
  height: 110px;
  border: 5px solid black;

  h1 {
    font-family: "Times New Roman", Times, serif;
    font-size: 16px;
    color: #000000;
  }
`;

const ConfirmPurchases = styled.button`
  width: 100px;
  height: 50px;
  border: 3px solid black;
  background-color: green;
`;


