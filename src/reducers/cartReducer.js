import { ADD_ITEMS_TO_CART, GET_CART_ITEMS_COUNT, DECREASE_ITEM_QUANTITTY, REMOVE_ITEMS_FROM_CART } from "../constants/AppConstants";
import initialItems from "../assets/data/initialItems";

console.log(initialItems);

const initialState = {
    cartItemsCount: 0,
    cartItemsQuantity: 0,
    cartTotalPrice: 0,
    items: {
        "1" : {"id": "1", 
            "name" : "Harry Potter and the Chamber of Secrets", 
            "image": "assets/Images/1.jpeg", 
            "description" : "This is product 1 description", 
            "price" : 500,
            "brandImg": "assets/Images/flipkart.png",
            "numbers": 0,
            "inCart": false},
        "2" : {"id": "2", 
            "name" : "Harry Potter and the Prisoner of Azkaban", 
            "image": "assets/Images/two.jpeg", 
            "description" : "This is product 2 description", 
            "price" : 1500,
            "brandImg": "assets/Images/flipkart.png",
            "numbers": 0,
            "inCart": false},
        "3" :  {"id": "3", "name" : "Harry Potter and the Order of the Phoenix", 
            "image": "assets/Images/3.jpeg", 
            "description" : "This is product 3 description",
            "price" : 2000,
            "brandImg": "assets/Images/flipkart.png",
            "numbers": 0,
            "inCart": false}
        // "4" :  {"id": "4", "name" : "Harry Potter and the Cursed Child - Parts One and Two", "brandImg": "assets/Images/flipkart.png", "image": "assets/Images/4.jpeg", "description" : "This is product 4 description", "price" : 500, "numbers": 0,
        // "inCart": false},
        // "5" :  {"id": "5", "name" : "Harry Potter and the Deathly Hallows", "brandImg": "assets/Images/flipkart.png", "image": "assets/Images/5.jpeg", "description" : "This is product 5 description", "price" : 3500, "numbers": 0,
        // "inCart": false},
        // "6" :  {"id": "6", "name" : "Fantastic Beasts: The Crimes of Grindelwald - The Original Screenplay", "brandImg": "assets/Images/flipkart.png", "image": "assets/Images/6.jpeg", "description" : "This is product 6 description", "price" : 3000, "numbers": 0,
        // "inCart": false},
        // "7" :  {"id": "7", "name" : "Shivaji: The Great Maratha", "image": "assets/Images/7.jpeg", "brandImg": "assets/Images/flipkart.png", "description" : "This is product 7 description", "price" : 1000, "numbers": 0,
        // "inCart": false},
        // "8" :  {"id": "8", "name" : "Shriman Yogi", "image": "assets/Images/8.jpeg", "brandImg": "assets/Images/flipkart.png", "description" : "This is product 8 description", "price" : 500, "numbers": 0,
        // "inCart": false},
        // "9" :  {"id": "9", "name" : "How to win friends and Influence people - The First and Still the Best Book of Its kind on Self-Help", "brandImg": "assets/Images/flipkart.png", "image": "v9.jpeg", "description" : "This is product 9 description", "price" : 500, "numbers": 0,
        // "inCart": false},
        // "10" :  {"id": "10", "name" : "The Da Vinci Code", "image": "assets/Images/10.jpeg", "brandImg": "assets/Images/flipkart.png", "description" : "This is product 10 description", "price" : 400, "numbers": 0,
        // "inCart": false},
        // "11" :  {"id": "11", "name" : "Angels And Demons", "image": "assets/Images/11.jpeg", "brandImg": "assets/Images/flipkart.png", "description" : "This is product 11 description", "price" : 900, "numbers": 0,
        // "inCart": false},
        // "12" :  {"id": "12", "name" : "The Origin...", "image": "assets/Images/12.jpeg", "brandImg": "assets/Images/flipkart.png", "description" : "This is product 12 description", "price" : 3500, "numbers": 0,
        // "inCart": false},
  
    }
}

export default function cartReducer(state = initialState, action = {}) {
    let selectedItem = {};
    let cartItemsCount = 0;
    let cartItemsQuantity = 0;
    let cartTotalPrice = 0;

    switch(action.type) {
        case ADD_ITEMS_TO_CART:
            selectedItem = {...state.items[action.payload]}
            selectedItem.inCart = true;

            cartItemsCount = state.cartItemsCount;
            if (selectedItem.numbers === 0) {
                cartItemsCount += 1; 
            }

            selectedItem.numbers +=1;

            return {
                ...state,
                cartItemsCount: cartItemsCount,
                cartItemsQuantity: state.cartItemsQuantity + 1,
                cartTotalPrice: state.cartTotalPrice + selectedItem.price,
                items: {
                    ...state.items,
                    [action.payload]: selectedItem
                }
            }
        case GET_CART_ITEMS_COUNT:
            return {
                ...state
            }
        
        case DECREASE_ITEM_QUANTITTY:
            selectedItem = {...state.items[action.payload]}
            selectedItem.numbers = (selectedItem.numbers === 0) ? 0 : selectedItem.numbers - 1;
            
            cartItemsCount = state.cartItemsCount;
            cartItemsCount = (selectedItem.numbers === 0) ? (cartItemsCount === 0 ? 0 : cartItemsCount - 1) : cartItemsCount;
            
            cartItemsQuantity = (state.cartItemsQuantity === 0) ? 0 : state.cartItemsQuantity - 1;
            cartTotalPrice = (state.cartTotalPrice === 0) ? 0 : state.cartTotalPrice - selectedItem.price;
            
            return {
                ...state,
                cartItemsCount: cartItemsCount,
                cartItemsQuantity: cartItemsQuantity,
                cartTotalPrice: cartTotalPrice,
                items: {
                    ...state.items,
                    [action.payload]: selectedItem
                }
            }

        case REMOVE_ITEMS_FROM_CART:
            selectedItem = {...state.items[action.payload]}           
            cartItemsQuantity = state.cartItemsQuantity - selectedItem.numbers;
            cartTotalPrice = state.cartTotalPrice - (selectedItem.numbers * selectedItem.price);
            selectedItem.numbers = 0;
            selectedItem.inCart = false;
           
            return {
                ...state,
                cartItemsCount: state.cartItemsCount - 1,
                cartItemsQuantity: cartItemsQuantity,
                cartTotalPrice: cartTotalPrice,
                items: {
                    ...state.items,
                    [action.payload]: selectedItem
                }
            }

        default:
            return state;
    }
}
