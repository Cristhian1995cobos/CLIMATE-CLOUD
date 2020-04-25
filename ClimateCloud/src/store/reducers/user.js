const initialState = {
    currentUser: {},
    users: {},
    status: false,
    host: 'ioticos.org',
    username: 'rJ6XFUSwA6ypIHM',
    password: 'aTuDefz29HIVrlr',
    roottopic: 'm4xvQf1qekvtaCH',
}

export default (state = { 
    host: 'ioticos.org',
    username: 'rJ6XFUSwA6ypIHM',
    password: 'aTuDefz29HIVrlr',
    roottopic: 'm4xvQf1qekvtaCH'}, action) => {
    
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, currentUser: action.payload };
        case 'act_host':
            return { ...state, host: action.host};
        case 'act_username':
            return { ...state, username: action.username};
        case 'act_password':
            return { ...state, password: action.password};    
        case 'act_roottopic':
            return { ...state, roottopic: action.roottopic};
        default:
            return { ...state};
    }
   
    
};