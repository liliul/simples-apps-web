const urlApiCrud = 'http://localhost:5500/api';

export default async function getDados() {
    const req = await fetch(urlApiCrud);
    const res = await req.json();

    return res
}