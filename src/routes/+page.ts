import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const data = await fetch("https://random.dog/woof.json")
    return await data.json()
};