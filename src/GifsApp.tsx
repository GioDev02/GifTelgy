import React, { useState } from 'react'
//import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.actions'
import type { Gif } from './gifs/interfaces/gif.interface'
import useGifs from './gifs/hooks/useGifs'

export const GifsApp = () => {
    const { previousTerms, gifResponse, handleSearch, handleTermClicked } = useGifs();

    //const { } = useGifs();

    return (
        <>
            {/*header*/}
            <CustomHeader title="Buscador GifTelgy" description="Busca tu gif y compártelo" />

            {/*Search*/}
            <SearchBar placeholder="Buscar gifs..." onQuery={handleSearch} />
            {/*Busquedas previas*/}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />
            {/*Gifs*/}
            <GifList gifs={gifResponse} />
        </>
    )
}