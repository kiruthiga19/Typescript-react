type personProps = {
    name :{
        first: string
        last : string
    }
}
export const Person = (props:personProps) => {
    return <div>Bruce Wayne {props.name.first}{props.name.last}</div>
}
