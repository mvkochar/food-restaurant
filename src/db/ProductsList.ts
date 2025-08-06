type TProduct = {
    id: number
    image: string
    category: string
    title: string
    price: string
    description: string
}

const ProductsList: TProduct[] = [
    {
        id: 1,
        image: '/images/products/1.png',
        category: "Appetizer",
        title: "Garlic Cheese Bread",
        price: "7",
        description: "Toasted baguette with a blend of mozzarella cheese and garlic butter. Lorem ipsum dolor sit amet slur hehe wadaw mantap."
    },

    {
        id: 2,
        image: '/images/products/2.png',
        category: "Main Course",
        title: "Chicken Wings BBQ",
        price: "11",
        description: "Grilled chicken wings coated in a smoky barbecue glaze with sesame seeds. Juicy, tender, and packed with bold flavor in every bite."
    },

    {
        id: 3,
        image: '/images/products/3.png',
        category: "Main Course",
        title: "Stuffed Mushrooms",
        price: "5",
        description: "Oven-roasted mushrooms filled with melted cheese, sautéed onions, and a hint of herbs. A perfect balance of creamy and earthy flavors."
    },

    {
        id: 4,
        image: '/images/products/4.png',
        category: "Appetizer",
        title: "Creamy Pumpkin Soup",
        price: "9",
        description: "A smooth and velvety pumpkin soup made with fresh cream, seasonal spices, and topped with crispy croutons for extra texture."
    },

    {
        id: 5,
        image: '/images/products/5.png',
        category: "Appetizer",
        title: "Bruschetta al Pomodoro",
        price: "8",
        description: "Freshly toasted bread topped with ripe tomatoes, garlic, olive oil, and basil leaves. A classic Italian appetizer full of vibrant taste."
    },

    {
        id: 6,
        image: '/images/products/6.png',
        category: "Appetizer",
        title: "Crispy Caesar Salad",
        price: "6",
        description: "Crisp romaine lettuce tossed with garlic croutons, parmesan shavings, and our signature Caesar dressing made in-house."
    },
]

export default ProductsList