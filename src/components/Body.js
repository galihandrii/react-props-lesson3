import Cards from "../Cards";


const Body = (props)=>{
    return(
        <div>
            <h1>Ini Body</h1>
            { 
                props.product.map(function(item){
                    <Cards name={item.name} price={item.price}/>
                })
            }
        </div>
    )
}

export default Body;