import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { ThreeDots } from 'react-loader-spinner'
import Card from '../components/Card'
import { searchRecipes } from '../services/recipesService'

const Search = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get('q') || '';

        if (queryParam) {
            setQuery(queryParam);
        }
    }, []);

    useEffect(() => {

        if (!query) {
            setResults([]);
            return;
        }

        setLoading(true);

        try {

            const filteredResults = searchRecipes(query);
            setResults(filteredResults);

        } catch (error) {

            setError('Error searching recipes');

        } finally {

            setLoading(false);
        }

    }, [query]);

    const handleSearch = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>
                חיפוש
            </h1>

            <div className='bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center'>
                <IoSearchOutline className='w-5 h-5 ml-2 text-neutral-300' />

                <input
                    value={query}
                    onChange={handleSearch}
                    className='outline-none w-full placeholder:text-[#1b2629]'
                    type='search'
                    placeholder='חפשו מתכון'
                />
            </div>

            {loading && (
                <div className='flex items-center justify-center'>
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#00aaff"
                        visible={true}
                    />
                </div>
            )}

            {error && <div>{error}</div>}

            <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {results.map((item) => (
                    <Card item={item} key={item.menuId} />
                ))}
            </ul>
        </div>
    )
}

export default Search