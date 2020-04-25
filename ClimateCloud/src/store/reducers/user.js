const initialState = {
    currentUser: {},
    users: {},
    status: false,
    host: 'ioticos.org',
    username: 'rJ6XFUSwA6ypIHM',
    password: 'aTuDefz29HIVrlr',
    roottopic: 'm4xvQf1qekvtaCH',
}


export default (state = initialState , action) => {

    
    switch (action.type) {
      
        case 'act_host':
            return { ...state, host: action.payload};
        case 'act_username':
            return { ...state, username: action.payload};
        case 'act_password':
            return { ...state, password: action.payload};    
        case 'act_roottopic':
            return { ...state, roottopic: action.payload};
        default:
            return { ...state};
    }
   
    
};