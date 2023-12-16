const urlApiCrud = 'http://localhost:5500/api';

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