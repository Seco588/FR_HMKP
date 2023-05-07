//ListingForm: Crea un componente ListingForm che conterrà il modulo per creare o modificare un annuncio.
import React, { useState } from 'react';
import { createListing } from '../api/listingsApi';
import { useHistory } from 'react-router-dom';

const ListingForm = ({ initialValues = {} }) => {
    const [title, setTitle] = useState(initialValues.title || '');
    const [description, setDescription] = useState(initialValues.description || '');
    const [price, setPrice] = useState(initialValues.price || '');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createListing({ title, description, price });
            history.push('/listings');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label htmlFor="price">Price</label>
            <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default ListingForm;
