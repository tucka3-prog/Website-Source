import axios from "axios"

function editImageFunction(info) {
        return axios.get(`http://35.224.119.47:8080/editPicture/${info}`)
    }


export default editImageFunction;