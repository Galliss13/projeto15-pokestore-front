import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { white } from "../../constants/colors";
import { useNavigate } from "react-router-dom";


export default function Store() {
const [data, setData] = useState([])
const [typeProducts, setTypeProducts] = useState([])
const [takeInfo, setTakeInfo] = useState("")
const navigate = useNavigate()

useEffect(() => {
  const config = {
    headers: {
      // Authorization: `Bearer ${token}`
    },
  };

  axios
    .get("/store", config)
    .then((res) => {
      console.log(res.data);
      setData(res.data);
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
        <TypeItens onClick={() => setTakeInfo("pokeball")}>Pokeballs</TypeItens>
        <TypeItens onClick={() => setTakeInfo("potion")}>Apricorns</TypeItens>
        <TypeItens onClick={() => setTakeInfo("item")}>Jewels</TypeItens>
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
          <Comments>COMMENT QUESTION</Comments>
          <ConfirmPurchases onClick={() => navigate('/cart')}>Finalizar compra</ConfirmPurchases>
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
  color: ${white};
  font-family: 'Permanent Marker', cursive;
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
    margin-top: 20px;
  width: 400px;
  height: 110px;
  background-color: ${white};
  border: 5px solid black;
  border-radius: 20px;
  font-family: 'Permanent Marker', cursive;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
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
  color: ${white};
  font-family: 'Permanent Marker', cursive;
`;


