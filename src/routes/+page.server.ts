import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random")
    return await data.json()
};