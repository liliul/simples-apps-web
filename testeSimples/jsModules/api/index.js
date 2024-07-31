/**
 * api: Anime naruto
 * doc: https://api-dattebayo.vercel.app/docs#introduction
 * url: https://dattebayo-api.onrender.com/
 * 
 * @param {string} endPoint
 */

export async function getApiNaruto(endPoint) {
    const req = await fetch(`https://dattebayo-api.onrender.com/${endPoint}`)
    const res = await req.json()

    return res
}