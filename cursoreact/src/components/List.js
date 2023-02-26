const List = () => {
    
    const items = [
        {id:1, car:"McLaren"},
        {id:2, car:"Ferrari"},
        {id:3, car:"Willams"}   
    ]    
    
    return (
        <div>
            {items.map((item)=>(
                <p key={item.id}>Id: {item.id} | Carro: {item.car}</p>
            ))}
        </div>
    );


}

export default List;