const AnotherComponent = () => {

    const handleClick = () => {
        console.log("Hi Everyone !")
    }

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de Click</button>
            <button onClick={()=>console.log("in line")}>Evento de Click</button>
        </div>
    )
}

export default AnotherComponent;