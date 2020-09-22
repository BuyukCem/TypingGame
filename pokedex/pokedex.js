import {apiFetch} from "utils/api";
import {ApiErrors} from "Errors/apiErrors";

async function getPokemon() {
    try {
        const list = await apiFetch("/pokemon/ditto", {
            method: 'GET'
        })
        console.log(list)
    } catch (e) {
        if (e instanceof ApiErrors) {
           console.log(e)
        } else {
            console.log(e)
        }
    }
}