import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'sagara',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'sagara',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            
            name: 'almonds new',
            category: 'vegetable',
            image: '/images/almonds.jpg',
            price: 120,
            countInStock: 10,
            brand: 'brand1',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality fresh product',
        },
        {
            
            name: 'apple',
            category: 'vegetable',
            image: '/images/apple.jpg',
            price: 100,
            countInStock: 10,
            brand: 'brand2',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality fresh product',
        },
        {
            
            name: 'Lacoste banana',
            category: 'vegetable',
            image: '/images/banana.jpg',
            price: 220,
            countInStock: 10,
            brand: 'brand2',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality fresh product',
        },
        {
            
            name: 'Lacoste beans',
            category: 'vegetable',
            image: '/images/beans.jpg',
            price: 78,
            countInStock: 10,
            brand: 'brand4',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality fresh product',
        },
        {
            
            name: 'beetroot',
            category: 'vegetable',
            image: '/images/brinjal.jpg',
            price: 65,
            countInStock: 10,
            brand: 'brand5',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality fresh product',
        },
        {
            
            name: 'broccoli',
            category: 'vegetable',
            image: '/images/broccoli.jpg',
            price: 139,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality fresh product',
        },
        {
            
            name: 'cashews',
            category: 'vegetable',
            image: '/images/cashews.jpg',
            price: 139,
            countInStock: 10,
            brand: 'brand6',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality fresh product',
        },
        {
            
            name: 'broccolia',
            category: 'vegetable',
            image: '/images/corn.jpg',
            price: 139,
            countInStock: 0,
            brand: 'brand1',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality fresh product',
        }
    ],
    };
export default data;