import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import AuthContext from "../../contexts/AuthContext";
import makeUrl from "../../environment";


export default function Home() {
    const [data, setData] = useState();
    const { token } = useContext(AuthContext);

    useEffect(() => {

        async function getUser() {

            const res = await fetch(makeUrl('perfil'), {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })

            const resData = await res.json();
            setData(resData);

        }

        getUser();

    }, [])

    return (
        <>
            <h1>TOP 10 HOMES DA INTERWEBS</h1>
            <h2>{data?.nome}</h2>
        </>
    )

}