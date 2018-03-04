const BASE_URL = "http://localhost:3001";
const AUTH = {headers: {'Authorization': 'hi', 'content-type': 'application/json'}};
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
    const headers = {...AUTH, method: 'DELETE'};
    return fetch(`${BASE_URL}${path}`, headers).then(toJson);
};

const PUT = (path, payload) => {
    const headers = {
        ...AUTH,
        method: 'PUT',
        body: JSON.stringify(payload)
    };
    return fetch(`${BASE_URL}${path}`, headers).then(toJson);
};

export const Posts = {
    all: (category, cb) => {
        if (category === 'all') return GET('/posts').then(cb)
        else return GET(`/${category}/posts`).then(cb)
    },
    create: (post, cb) => POST('/posts', post).then(cb),
    delete: (id, cb) => DELETE(`/posts/${id}`).then(cb),
    get: (id, cb) => GET(`/posts/${id}`).then(cb),
    update: (post, cb) => {
        PUT(`/posts/${post.id}`, post).then(cb)
    }
};

export const Categories = {
    all: (cb) => GET('/categories').then(json => cb(json.categories)),
}


