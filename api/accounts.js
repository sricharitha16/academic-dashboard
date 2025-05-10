import api from ".";

export const register_user =async details =>{
    console.log(details);
    const response = await api.post('Uregister', details);
    //const id = await api.post('getID', details);
    //const new_feed=
    console.log("response",details);
    
    return response.data;
}

export const login_user =async data =>{
    const response =await api.post('Ulogin', data);
    return response.data;
}

export const get_users =async () =>{
    const response =await api.get('get_users');
    return response.data;
}