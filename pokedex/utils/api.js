/**
 * @param {string} endpoint
 * @param {object} options
 * **/
import {ApiErrors} from "pokedex/Errors/apiErrors";

export async function apiFetch(endpoint, options = {}) {
    const response = await fetch('https://pokeapi.co/api/v2/' + endpoint, {
        headers: {
        },
        ...options
    })
    if (response.status === 204) {
        return null;
    }
    const responseData = await response.json()
    if (response.ok) {
        console.log("Hello 1 ")
        return responseData;
    } else {
        if (responseData.message) {
            throw new ApiErrors(responseData.message)
        }
    }
}