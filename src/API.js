const API = {
    url: 'http://localhost:8000',
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    
    getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },

    http_fetch(url, data, method){
        return new Promise(resolve => {
            var opts = {
                    method: method,
                    headers:{'Content-Type': 'application/json'}
                }
    
            if(method == "POST"){
                opts.body = JSON.stringify(data);
            }
            fetch(`${url}`, opts).then(response => response.json())
                    .then((data) => {
                        resolve(data)
                }).catch(error => console.log('error ->', error))
        })
    },

    user_login(username, password){
        return new Promise(resolve => {
            this.http_fetch(`${this.url}/auth/signin`, {username: username, password: password}, "POST").then(response => {
                resolve(response)
            })
        })
    },

    user_register(username, email, password1, password2){
        return new Promise(resolve => {
            this.http_fetch(`${this.url}/auth/register`, {username: username, email: email, password1: password1, password2: password2}, "POST").then(response => {
                resolve(response)
            })
        })
    },

    user_profile(public_token){
        return new Promise(resolve => {
            this.http_fetch(`${this.url}/auth/profile`, {public_token: public_token}, "POST").then(response => {
                resolve(response)
            })
        })
    },

    question_post(title, question){
        return new Promise(resolve => {
            this.http_fetch(`${this.url}/questions/post`, {public_token: this.getCookie('public_token'), title: title, question: question}, "POST").then(res => {
                resolve(res)
            })
        })
    },

    question_get(id){
        return new Promise(resolve => {
            this.http_fetch(`${this.url}/questions/get`, {id: id}, "POST").then(res => {
                resolve(res)
            })
        })
    }
}

const APISingleton = API;

window.API = APISingleton // web

export default window.API// this will initialise the singleton instantly