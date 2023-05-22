import { BASE_URL } from "./base_url";
import axios from "axios"

export const getSecurity = async () => {
    let globalData
    await axios.get(`${BASE_URL}/security`)
        .then(res => {
            globalData = res.data
        })
    return globalData
}