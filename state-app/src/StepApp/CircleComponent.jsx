
//default eans its the main/only export
export default function CircleComponent(props){
    return(
    
     
     <div style={{
                border: "2px solid blue",
                padding: 5,
                display: "inline-block"
            }}>
               <p>{props.step}</p>
            </div>    
        )
      
}