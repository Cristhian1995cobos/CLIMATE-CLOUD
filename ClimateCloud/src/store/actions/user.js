import Axios from 'react-native-axios'
const url = 'http://jsonplaceholder.typicode.com/users';

export const fetch_user = () => async dispatch => {
    const res = await Axios.get(url);
    const users = await res.data;
    return users;
    //dispatch({type: 'FETCH_USERS', payload: users});

};

export const login = (username, password) => async dispatch => {
    const res = await Axios.get(url);
    const users = await res.data;
    const currentUser = users.find(user => user.username === username)
   
    dispatch({ type: 'LOG IN', payload: currentUser });
    
}


export const changehost = (new_state)  => dispatch =>{
    
    dispatch({ type: 'act_host', host: new_state });

}

export const changeusername = (new_state)  => dispatch =>{
    
    dispatch({ type: 'act_username', username: new_state });

}


export const changepassword = (new_state)  => dispatch =>{
    
    dispatch({ type: 'act_password', password: new_state });

}


export const changeroottopic = (new_state)  => dispatch =>{
    
    dispatch({ type: 'act_roottopic', roottopic: new_state });

}

