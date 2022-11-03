type Oscar ={
    children:React.ReactNode
}

export const Oscar = (props:Oscar)=>{
    return(
        <div>
            oscar{props.children}
        </div>
    )
}