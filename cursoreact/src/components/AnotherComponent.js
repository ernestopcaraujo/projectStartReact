const AnotherComponent = () => {

    const handleClick = () => {
        window.alert("Hi Everyone !")
    }

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de Click</button>
            <button onClick={()=>window.alert("in line")}>Evento de Click</button>
        </div>
    )
}

export default AnotherComponent;