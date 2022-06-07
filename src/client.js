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
            /*
            headers: { 'Access-Control-Allow-Origin': '*' },
            
            proxy: {
                host: '127.0.0.1',
                port: 8000
            }
            */

            
        }
        let client = axios.create(initialConfig)
        client.defaults.headers.common["Content-Type"] = "application/json"
        client.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");

        return client
    }

    getMonitors() {
        return this.apiClient.get('/monitors').then(({ data }) => {
            return data
        })
    }

    editMonitor(id, string) {
        return this.apiClient.put('monitors/' + id + string).then(({ data }) => {
            return data
        })
    }

    postMonitor(string) {
        return this.apiClient.post('monitors' + string).then(({ data }) => {
            return data
        })
    }

    getMonitor(id) {
        return this.apiClient.get("/monitors/" + id).then(({ data }) => {
            return data
        })
    }

    getEquips() {
        return this.apiClient.get('/equips').then(({ data }) => {
            return data
        })
    }


    getEquip(id) {
        return this.apiClient.get('/equips/' + id).then(({ data }) => {
            return data
        })
    }

    postEquip(body) {
        return this.apiClient.post('/equips' + body).then(({ data }) => {
            return data
        })
    }

    postParticipant(body) {
        return this.apiClient.post("/participants" + body).then(({ data }) => {
            return data
        })
    }

    getParticipants() {
        return this.apiClient.get('/participants').then(({ data }) => {
            return data
        })
    }

    getParticipant(id) {
        return this.apiClient.get("/participants/" + id).then(({ data }) => {
            return data
        })
    }

    editParcipantResponsable(idParticipant, idResponsable, string) {
        return this.apiClient.put('/participants/' + idParticipant + '/responsables/' + idResponsable + string).then(({ data }) => {
            return data
        })

    }

    editParticipant(idParticipant, string) {
        return this.apiClient.put('participants/' + idParticipant + string).then(({ data }) => {
            return data
        })
    }

    getParticipantResponsable(id) {
        return this.apiClient.get("/participants/" + id + "/responsables").then(({ data }) => {
            return data
        })
    }

    deleteAll(isfor) {
        return this.apiClient.delete(isfor).then(({data}) => {
            return data
        })
    }

    iniciarSessio(email, contrasenya) {
        return this.apiClient.post("/api/login_check", { username: email, password: contrasenya }).then(({ data }) => {
            localStorage.setItem("token", data["token"]);
            return data
        })
    }
}
export default APIClient;