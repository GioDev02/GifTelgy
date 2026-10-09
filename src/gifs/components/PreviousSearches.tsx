import React, { type FC } from 'react'

interface Props {
    searches: string[],
    onLabelClicked?: (term: string) => void

}

export const PreviousSearches: FC<Props> = ({ searches, onLabelClicked }) => {
    return (
        <div className='previous-searches'>
            <h2>Búsquedas anteriores</h2>
            <ul className='previous-searches-list'>
                {searches.map((search, index) => (
                    <li key={search} onClick={() => onLabelClicked?.(search)}>
                        {search}
                    </li>
                ))}
            </ul>
        </div>
    )
}
