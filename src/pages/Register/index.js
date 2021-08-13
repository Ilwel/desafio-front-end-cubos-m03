import Card from '../../components/Card'
import { Link } from 'react-router-dom'

const simpleInputsRegister = [
    { label: "Seu nome", id: "seuNome" },
    { label: "Nome da loja", id: "nomeLoja" },
    { label: "E-mail", id: "email" },
]

const passwordInputsRegister = [

    { label: "Senha", id: "senha" },
    { label: "Repita a senha", id: "repitaSenha" },

]

const buttonsRegister = [

    { content: "CRIAR CONTA", variant: "contained", color: "primary", type:"submit", id:"criarConta" }

]

const messageRegister = (<>Já possui uma  conta? <Link to="/login" >ACESSE</Link></>)

export default function Register() {

    return (
        <Card
            title="Criar uma conta"
            simpleInputs={simpleInputsRegister}
            passwordInputs={passwordInputsRegister}
            buttons={buttonsRegister}
            footerMessage={messageRegister}
            typeCard="register"
        />
    )

}