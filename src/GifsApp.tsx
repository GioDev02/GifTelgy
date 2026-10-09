import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.actions'
import type { Gif } from './gifs/interfaces/gif.interface'

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['DB']);

    const handleLabelClick = (term: string) => {

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

    return (
        <>
            {/*header*/}
            <CustomHeader title="Buscador GifTelgy" description="Busca tu gif y compártelo" />

            {/*Search*/}
            <SearchBar placeholder="Buscar gifs..." onQuery={handleSearch} />
            {/*Busquedas previas*/}
            <PreviousSearches searches={previousTerms} onLabelClicked={(term: string) => handleLabelClick(term)} />
            {/*Gifs*/}
            <GifList gifs={gifResponse} />
        </>
    )
}