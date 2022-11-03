type StatusProps = {
    status:'loading'|'success'|'error'
}

export const Status = (props:StatusProps) => {
    let message
    if(props.status === 'loading'){
        message='LOADING'
    } else if(props.status==='success'){
        message='data fetching successfull'
    }
    else if(props.status==='error'){
        message='ERROR FETCHING DATA'
    }
    return (
        <div>
            
            <h2>Status-{message}</h2>
        </div>
    )
}