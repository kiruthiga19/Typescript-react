type GreetProps ={
    name:string
    messageCount:number
    isLoggedIn:boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>{props.isLoggedIn ? `helo welcome${props.name}${props.messageCount}`: `welcome guest` }</h1>
    </div>
  )
}
