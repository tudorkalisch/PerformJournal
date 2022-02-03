import axios, { Axios } from "axios";

class EmployeeService {
    static users = [
        { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
        { id: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
        { id: 3, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
        { id: 4, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
        { id: 5, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
    ]

    static employee = [{
        id: "eed36065-92fd-4d62-8098-58e89bfbfbf9",
        createdAt: "2022-02-02T21:32:17+00:00",
        modifiedAt: "2022-02-03T16:49:35+00:00",
        firstName: "Natasha",
        lastName: "Romanoff",
        markFinal: 0.0,
        categories: [
            {
                id: "1e33320e-7ffa-419b-804c-463cf02abb6d",
                createdAt: null,
                modifiedAt: null,
                categoryName: "mainCategory1",
                categoryPercentage: 0.3,
                markCategory: 0.0,
                subcategories: [
                    {
                        id: "3a9c8956-972b-4272-9d08-99bff52a2cb7",
                        createdAt: null,
                        modifiedAt: null,
                        subcategoryName: "sub2",
                        markSubcategory: 7.0
                    }
                ]
            },
            {
                id: "411e3925-f6c4-47c2-9edb-aaa4ff0e63af",
                createdAt: null,
                modifiedAt: null,
                categoryName: "mainCategory2",
                categoryPercentage: 0.1,
                markCategory: 0.0,
                subcategories: []
            },
            {
                id: "d43a8f28-adbc-4854-b289-d8cfc1416207",
                createdAt: null,
                modifiedAt: null,
                categoryName: "mainCategory3",
                categoryPercentage: 0.15,
                markCategory: 0.0,
                subcategories: []
            }
        ]
    }]

    instance = axios.create({
        baseURL: `http://localhost:9010/pj-service/employee/`,
        timeout: 1000,
        headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")).accessToken }
    })

    static getAllEmployees = async () => {
        return this.instance.get('all')
            .then(res => {
                console.log(res)
                if (res == undefined) {
                    return []
                }

                return this.employee
            }).catch(err => {
                console.log(err);
                return this.employee
            })
    }
}

export default EmployeeService;