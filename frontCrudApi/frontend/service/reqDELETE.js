import { urlApiCrud } from "../utils/utils.js";

export default function deletarDados(id) {
    fetch(`${urlApiCrud}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            console.log('DELETE',data);
        })
        .catch(error => console.error(error))
}