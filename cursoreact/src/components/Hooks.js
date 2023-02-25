import {useState, useEffect} from "react";

const Hooks = () => {

    let idade = 30;
    const [novaIdade, setNovaIdade]=useState(40);

    const changeAge = () => {
        idade = 31;
        window.alert(idade);
    }

    const changeNewAge = () => {
        setNovaIdade(45);
    }

    useEffect(()=>{
        window.alert("Mudou a Idade");
    });

    return (

        <div>
            <p>Idade: {idade} </p>
            <button onClick={changeAge}>Mudar Idade</button>
            <p>Idade: {novaIdade} </p>
            <button onClick={changeNewAge}>Mudar para Nova Idade</button>
        </div>
    );
}

export default Hooks; 