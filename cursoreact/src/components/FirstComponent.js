import AnotherComponent from "./AnotherComponent"


function FirstComponent(){

    const name = "Matheus"
    return (
        <div className="firstcomponent">
            <p>Primeiro Componente</p>
            <p>Abaixo um input onde a propriedade "for" do label foi mudada </p>
            <p>para "htmlFor" para não
            dar conflito com o React</p>
            <label htmlFor="name">Nome: </label>
            <input type="text" name="name"></input>
            <p>Quanto é 2X8 ? É  {2*8} !</p>
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent