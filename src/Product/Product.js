import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css'

const Product = () => {
    const { productId } = useParams();;
    const [selectedImage, setSelectedImage] = useState(0);
    const product = [{
        id: 1,
        name: 'banana',
        price: 5,
        storeName: 'Good Super',
        description: 'Tasty Yellow fruit that you want to eat all day long',
        images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/800px-Banana-Single.jpg', 'https://images.heb.com/is/image/HEBGrocery/000377497'],
    }].find(product => product.id === +productId)


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
                <div id='productName'><b>{product.name}</b></div>
                <div><b>Price:</b> ₪{product.price}</div>
                <div><b>Description:</b> {product.description}</div>
                <div><b>Selling store:</b> {product.storeName}</div>
            </div>
        </div> : null
    );
}

export default Product;
