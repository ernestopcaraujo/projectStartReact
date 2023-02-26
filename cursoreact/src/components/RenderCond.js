const RenderCond = ({x,y}) => {
    
    

    return(

        <div>
            {x > 5 && <p>The number is bigger than 5</p>}
            {x > 5 ? <p>The number is big</p>:<p>The number is small</p>}
            <p>{y*y}</p>
        </div>
    )
}
export default RenderCond