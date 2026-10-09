import React, { useEffect, useState, type KeyboardEvent } from 'react';

interface Props {
    placeholder?: string;
    onQuery?: (query: string) => void
    //onChange?: (change: string) => void
}

// export default function SearchBar({placeholder = "Buscar", onQuery, onChange}: Props) {
export default function SearchBar({ placeholder = "Buscar", onQuery }: Props) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onQuery?.(query);
        }, 700);

        return () => clearTimeout(timeOutId);
    }, [query, onQuery]
    )

    const handleSearch = () => {
        onQuery?.(query);
        setQuery("");
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <div className='search-container'>
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )

}