import axios from 'axios';

const BASE_URL = 'http://localhost:8080/v1/business';

class BusinessService {
    getAllBusinesses() {
        return axios.get(BASE_URL);
    }

    createBusiness(business){
        return axios.post(BASE_URL, business)
    }

    getBusinessById(id){
        return axios.get(BASE_URL + '/' + id);
    }

    saveOrUpdateBusiness(id, business){
        return axios.put(BASE_URL + '/' +id, business);
    }

    deleteBusiness(id){
        return axios.delete(BASE_URL + '/' + id);
    }
}

export default new BusinessService();