import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products';
import './Product.css'

const Product = () => {
    const { productId } = useParams();;
    const [selectedImage, setSelectedImage] = useState(0);
    const product = products.find(product => product.id === +productId)


    return (
        product ? <div id='selectedProduct'>
            <div>
                <img src={product.images[selectedImage]} id='productBigImage'></img>
                <div id='extraImages'>
                    {product.images.reduce((images, image, index) => {
                        if (index === selectedImage) {
                            return images
                        }
                        return [...images, <img src={image} className='extraImage' onClick={() => setSelectedImage(index)} key={`extraImage_${index}`} />]
                    }, [])}
                </div>
            </div>
            <div id='productInfo'>
                <div id='productName'><b>{product.title}</b></div>
                <div><b>Price:</b> ₪{product.price}</div>
                <div><b>Description:</b> {product.description}</div>
                <div><b>Selling store:</b> {product.storeName}</div>
            </div>
        </div> : null
    );
}

export default Product;
