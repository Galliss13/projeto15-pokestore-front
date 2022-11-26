import styled from "styled-components"


export default function Store() {
    return (
        <Conteiner>
            <Sidebar>
              <TypeItens>a</TypeItens>
              <TypeItens>a</TypeItens>
              <TypeItens>a</TypeItens>

            </Sidebar>
        </Conteiner>
    )
};

const Conteiner = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 20px;
  
`

const Sidebar = styled.div `
width: 30vw;
height: 100vh;
display: flex;
flex-direction: column;
`
const TypeItens = styled.div `
  width: 150px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6d2928;
`