import axios, { Axios } from "axios";

class EmployeeService {
    static users = [
        { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
        { id: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
        { id: 3, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
        { id: 4, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
        { id: 5, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
    ]

    instance = axios.create({
        baseURL: `http://localhost:9010/pj-service/employee/`,
        timeout: 1000,
        headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")).accessToken }
    })

    static getAllEmployees = async () => {
        return this.instance.get('all')
            .then(res => {
                if (res == undefined) {
                    return []
                }

                return this.users
            }).catch(err => {
                console.log(err);
                return []
            })
    }
}

export default EmployeeService;