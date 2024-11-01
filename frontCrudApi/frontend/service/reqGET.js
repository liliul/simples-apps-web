import { urlApiCrud } from "../utils/utils.js";
 
export default async function getDados() {
    const req = await fetch(urlApiCrud);
    const res = await req.json();

    return res
}