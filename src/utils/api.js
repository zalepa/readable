const BASE_URL = "http://localhost:3001";
const AUTH = { headers: { 'Authorization': 'hi' }};
const toJson = (res) => res.json();

const GET = (path) => {
    return fetch(`${BASE_URL}${path}`, AUTH).then(toJson);
};

const POST = (path, payload) => {
    const headers = {
        ...AUTH,
        method: 'POST',
        body: JSON.stringify(payload)
    };
    return fetch(`${BASE_URL}${path}`, headers).then(toJson);
};

const DELETE = (path) => {
    const headers = { ...AUTH, method: 'DELETE' };
    return fetch(`${BASE_URL}${path}`, headers).then(toJson);
};

export const Posts = {
    all: (cb) => GET('/posts').then(cb),
    create: (post, cb) => POST('/posts', post).then(cb),
    delete: (id, cb) => {
        console.log(id)
        DELETE(`/posts/${id}`).then(cb)
    }
};



