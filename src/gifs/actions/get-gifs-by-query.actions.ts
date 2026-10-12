import axios from "axios"
import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi<GiphyResponse>(`search`, {
        params: {
            q: query,
            limit: 10,
        }
    })

    console.log(response.data);
    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.fixed_height.url,
        width: Number(gif.images.fixed_height.width),
        height: Number(gif.images.fixed_height.height),
    }));
}
