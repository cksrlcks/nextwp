const baseURL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export type Banner = {
    id: number;
    title: {
        rendered: string;
    };
    acf: {
        banner: {
            url: string;
            link: string;
            alt: string;
            sizes: {
                thumbnail: string;
                medium: string;
                large: string;
            };
        };
    };
};
export async function getBannerList() {
    return fetch(`${baseURL}/wp/v2/banners`, {
        cache: "no-cache",
    });
}
