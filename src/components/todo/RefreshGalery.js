import axios from "axios"

function RefreshGalery() {
        return axios.get("http://35.224.119.47:8080/restart")
    }


export default RefreshGalery;