import {DOMAIN} from '../constants/http'

export function getAllFiles(){
    return fetch( DOMAIN + `docservice/?type=allFiles`, {
        method: 'GET',
        headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then((result) => {
        return result
    },
    (error) => {
        return error
    }
    ).catch((error) =>{console.log(error)});
}

export function getsimilaritylistfiles(){
    return fetch( DOMAIN + `docservice/?type=similarity`, {
        method: 'GET',
        headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then((result) => {
        return result
    },
    (error) => {
        return error
    }
    ).catch((error) =>{console.log(error)});
}

export function deletefiles(body){
    return fetch( DOMAIN + `docservice/`, {
        method: 'POST',
        headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json',
        },
        body:body,
    })
    .then(res => res.json())
    .then((result) => {
        return result
    },
    (error) => {
        return error
    }
    ).catch((error) =>{console.log(error)});
}