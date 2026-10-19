
import React, { useState } from 'react'
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.actions';

export default function useGifs() {


    const [previousTerms, setPreviousTerms] = useState<string[]>([]);



    const handleTermClicked = (term: string) => {

    }

    const [gifResponse, setGifResponse] = useState<Gif[]>([]);

    /*
    const handleSearch = (query: string) => {
        console.log({ query });
        if (!query) return;
        const termLowerCase = query.toLowerCase().trim();
        if (termLowerCase && !previousTerms.includes(termLowerCase)) {
            if (previousTerms.length >= 8) {
                setPreviousTerms(prev => [...prev.slice(1, 8), termLowerCase]);
                console.log(previousTerms);
            } else {
                setPreviousTerms([...previousTerms, termLowerCase]);
            }
        }
    } */

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms.slice(0, 8)]);

        const gifs = await getGifsByQuery(query);
        console.log({ gifs });
        setGifResponse(gifs);
    }

    // const handleChange = (change: string) => {
    //     console.log({ change });
    // }

    return {

        //Properties
        previousTerms,
        gifResponse,

        //Methods /Actions
        handleSearch,
        handleTermClicked


    }
}
