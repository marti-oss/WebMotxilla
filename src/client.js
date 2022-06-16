import config from "./config"
const axios = require("axios")

class APIClient {
    constructor(overrides) {
        this.config = {
            ...config,
            ...overrides,
        }
        this.apiClient = this.getApiClient(this.config)
    }

    /* Create Axios client instance pointing at the REST api backend */
    getApiClient(config) {
        let initialConfig = {
            baseURL: `${config.apiBasePath}`,
            
        }
        let client = axios.create(initialConfig)
        client.defaults.headers.common["Content-Type"] = "application/json"
        if(localStorage.getItem("token"))
            client.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
        else
        client.defaults.headers.common['Authorization'] = null

        return client
    }

    getMonitors() {
        return this.apiClient.get('/monitors').then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    editMonitor(id, string) {
        return this.apiClient.put('monitors/' + id + string).then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    postMonitor(string) {
        return this.apiClient.post('monitors' + string).then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    getMonitor(id) {
        return this.apiClient.get("/monitors/" + id).then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    getEquips() {
        return this.apiClient.get('/equips').then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }


    getEquip(id) {
        return this.apiClient.get('/equips/' + id).then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    postEquip(body) {
        return this.apiClient.post('/equips' + body).then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    postParticipant(body) {
        return this.apiClient.post("/participants" + body).then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    getParticipants() {
        return this.apiClient.get('/participants').then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    getParticipant(id) {
        return this.apiClient.get("/participants/" + id).then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    editParcipantResponsable(idParticipant, idResponsable, string) {
        return this.apiClient.put('/participants/' + idParticipant + '/responsables/' + idResponsable + string).then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 

    }

    editParticipant(idParticipant, string) {
        return this.apiClient.put('participants/' + idParticipant + string).then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    getParticipantResponsable(id) {
        return this.apiClient.get("/participants/" + id + "/responsables").then(({ data }) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    deleteAll(isfor) {
        return this.apiClient.delete(isfor).then(({data}) => {
            return data
        }).catch((error) => {
            console.log(error)
            return error
        }) 
    }

    iniciarSessio(email, contrasenya) {
        return this.apiClient.post("/api/login_check", { username: email, password: contrasenya }).then(({ data }) => {
            localStorage.setItem("token", data["token"]);
            return data
        })
    }

    tancarSessio() {
        localStorage.setItem("token", null)
    }

    valorToken() {
        return localStorage.getItem("token")
    }
}
export default APIClient;