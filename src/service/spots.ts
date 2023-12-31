const baseURL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export type Spot = {
    id: number;
    title: {
        rendered: string;
    };
    acf: {
        store_name: string;
        store_exp: string;
        latitude: string;
        longitude: string;
        store_image: string | boolean
    };
};

export async function getSpotLists() {
    return fetch(`${baseURL}/wp/v2/spots`, {
        cache: "no-cache",
    });
}
