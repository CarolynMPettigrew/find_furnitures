"use strict";

exports.products = function (req, res) {
    res.json([
        {id: 1, img: 'sample_data/chair_1.jpg', description: 'Black chair', price: 200.00, category: 'chair'},
        {id: 2, img: 'sample_data/chair_2.jpg', description: 'Chair MU5', price: 200.00, category: 'chair'},
        {id: 3, img: 'sample_data/chair_3.jpg', description: 'Oblique Chair', price: 300.00, category: 'chair'},
        {id: 4, img: 'sample_data/chair_4.jpg', description: 'Oblique Chair', price: 200.00, category: 'chair'},
        {id: 5, img: 'sample_data/chair_2.jpg', description: 'Chair MU5', price: 200.00, category: 'chair'},
        {id: 6, img: 'sample_data/chair_1.jpg', description: 'Black chair', price: 200.00, category: 'chair'},
        {id: 7, img: 'sample_data/chair_4.jpg', description: 'Oblique Chair', price: 200.00, category: 'chair'},
        {id: 8, img: 'sample_data/chair_3.jpg', description: 'Oblique Chair', price: 300.00, category: 'chair'},
        {id: 9, img: 'sample_data/chair_4.jpg', description: 'Oblique Chair', price: 200.00, category: 'chair'},
        {id: 10, img: 'sample_data/chair_3.jpg', description: 'Oblique Chair', price: 300.00, category: 'chair'},
        {id: 11, img: 'sample_data/chair_2.jpg', description: 'Chair MU5', price: 200.00, category: 'chair'},
        {id: 12, img: 'sample_data/chair_1.jpg', description: 'Black chair', price: 200.00, category: 'chair'},
        {id: 13, img: 'sample_data/chair_2.jpg', description: 'Chair MU5', price: 200.00, category: 'chair'},
        {id: 14, img: 'sample_data/chair_1.jpg', description: 'Black chair', price: 200.00, category: 'chair'},
        {id: 15, img: 'sample_data/chair_4.jpg', description: 'Oblique Chair', price: 200.00, category: 'chair'},
        {id: 16, img: 'sample_data/chair_3.jpg', description: 'Oblique Chair', price: 300.00, category: 'chair'}
    ]);
};

exports.categories = function (req, res) {
    res.json([
        {action: '#', name: 'Anterooms'},
        {action: '#', name: 'Armchairs'},
        {action: '#', name: 'Bar'},
        {action: '#', name: 'Beds'},
        {action: '#', name: 'Benches'},
        {action: '#', name: 'Bookcase'},
        {action: '#', name: 'Chairs'},
        {action: '#', name: 'Chests'},
        {action: '#', name: 'Desks'},
        {action: '#', name: 'Others'},
        {action: '#', name: 'Poufs'},
        {action: '#', name: 'Shelves'},
        {action: '#', name: 'Showcase'},
        {action: '#', name: 'Sofas'},
        {action: '#', name: 'Tables'},
        {action: '#', name: 'Wall units / sets'},
        {action: '#', name: 'Wardrobes'}
    ]);
};

exports.rooms = function (req, res) {
    res.json([
        {action: '#', name: 'Anteroom'},
        {action: '#', name: 'Bathroom'},
        {action: '#', name: 'Bedroom'},
        {action: '#', name: 'Dining room'},
        {action: '#', name: 'Garden Furniture'},
        {action: '#', name: 'Kids & Teenagers'},
        {action: '#', name: 'Kitchen'},
        {action: '#', name: 'Livingroom'},
        {action: '#', name: 'Office'}
    ]);
};
