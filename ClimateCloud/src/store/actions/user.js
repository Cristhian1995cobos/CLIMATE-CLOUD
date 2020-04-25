
export const changehost = (new_state)  => {
    
    return {
        type: 'act_host',
        payload: new_state
    }
   // dispatch({ type: 'act_host', host: new_state });

}

export const changeusername = (new_state)  =>{
    
    return {
        type: 'act_username',
        payload: new_state
    }
   // dispatch({ type: 'act_username', username: new_state });

}


export const changepassword = (new_state)  => {
    return {
        type: 'act_password',
        payload: new_state
    }
   // dispatch({ type: 'act_password', password: new_state });

}


export const changeroottopic = (new_state)  => {
    return {
        type: 'act_roottopic',
        payload: new_state
    }
   // dispatch({ type: 'act_roottopic', roottopic: new_state });

}

