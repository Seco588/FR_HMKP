//ListingCard: Crea un componente ListingCard che mostrerà le informazioni di un singolo annuncio.
import React from 'react';

const ListingCard = ({ listing }) => {
    return (
        <div>
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p>Price: {listing.price}</p>
            {/* Aggiungi il codice per visualizzare le immagini e altre informazioni, se necessario */}
        </div>
    );
};

export default ListingCard;
