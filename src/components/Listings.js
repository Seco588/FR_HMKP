//Modifica il componente Listings per recuperare gli annunci dal backend utilizzando la funzione fetchListings e visualizzare i dati utilizzando il componente ListingCard.
import React, { useEffect, useState } from 'react';
import { fetchListings } from '../api/listingsApi';
import ListingCard from '../components/ListingCard';

const Listings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchListings();
                setListings(data);
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Listings</h1>
            <div>
                {listings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </div>
        </div>
    );
};

export default Listings;
