import { loadSection } from '$lib/loadmd';

export async function load({ params }) {
    console.log("Load Section params")
    console.log(params)
    try {
      const section = await loadSection(params);
      return { section };
    } catch (error) {
      console.error(error);
      return { section: [] }; // Return an empty array if there's an error
    }
}