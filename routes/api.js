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
        {name: 'Anterooms'},
        {name: 'Armchairs'},
        {name: 'Bar'},
        {name: 'Beds'},
        {name: 'Benches'},
        {name: 'Bookcase'},
        {name: 'Chairs'},
        {name: 'Chests'},
        {name: 'Desks'},
        {name: 'Others'},
        {name: 'Poufs'},
        {name: 'Shelves'},
        {name: 'Showcase'},
        {name: 'Sofas'},
        {name: 'Tables'},
        {name: 'Wall units / sets'},
        {name: 'Wardrobes'}
    ]);
};

exports.rooms = function (req, res) {
    res.json([
        {name: 'Anteroom'},
        {name: 'Bathroom'},
        {name: 'Bedroom'},
        {name: 'Dining Room'},
        {name: 'Garden Furniture'},
        {name: 'Kids & Teenagers'},
        {name: 'Kitchen'},
        {name: 'Livingroom'},
        {name: 'Office'}
    ]);
};
