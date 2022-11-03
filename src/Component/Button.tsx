type ButtonProp ={
    handleclick:()=>void
}

export const Button = (props:ButtonProp) => {
  return (
    <button onClick={props.handleclick}>click</button>
  )
}


