import Container from "../../components/Container";
import { mainURL } from "../../constants/URLs";
import { Form, Input, StyledLink, Button, Formdiv } from "../../components/Form";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function Login() {

    const {authLogin, auth} = useContext(AuthContext)
    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({email:'', password:''})

    useEffect(() => {
        if (auth?.token) {
            navigate('/store')
        }
    }, [])
    
    function changeSignIn (e) {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }

    function submitSignIn (e) {
        e.preventDefault()

        const promise = axios.post(`${mainURL}/signin`, {...loginForm})
        promise.then((res) => {
            authLogin(res.data)
            navigate('/store')
        })
        promise.catch((err) => {
            console.log(err)
        })
    }

  return (
    <Container>
      <Logo/>
      <Formdiv>
        <Form onSubmit={submitSignIn}>
          <Input
            type={"email"}
            name="email"
            value={loginForm.email}
            onChange={changeSignIn}
            placeholder="E-mail"
            required
          ></Input>
          <Input
            type={"password"}
            name="password"
            value={loginForm.password}
            onChange={changeSignIn}
            placeholder="Senha"
            required
          ></Input>
          <Button type={"submit"}>Cadastrar</Button>
        </Form>
        <StyledLink to='/signup'>Não tem uma conta? Cadastre-se</StyledLink>
      </Formdiv>
    </Container>
  );
}
