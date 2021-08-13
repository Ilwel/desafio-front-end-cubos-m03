import Card from '../../components/Card'
import { Link } from 'react-router-dom'

const simpleInputsLogin = [

    { label: "E-mail", id: "email" },

]

const passwordInputsLogin = [

    { label: "Senha", id: "senha" }

]

const buttonsLogin = [

    { content: "ENTRAR", variant: "contained", color: "primary", type:"submit", id:"entrar" }

]

const messageLogin = (<>Primeira vez aqui? <Link to="/cadastro">CRIE UMA CONTA</Link></>)

export default function Login() {

    return (
        <Card
            title="Login"
            simpleInputs={simpleInputsLogin}
            passwordInputs={passwordInputsLogin}
            buttons={buttonsLogin}
            footerMessage={messageLogin}
            typeCard="login"
        />
    )

}