import{
	LOAD_CART_ITEMS,
	ADD_CART_ITEM,
	REMOVE_CART_ITEM
} from './types'; 

export function loadCartItems() {
	return{
		type: LOAD_CART_ITEMS,
	}


export function addCartItems(item) {
	return{
		type: ADD_CART_ITEM,
		payload: item
	}
}

export function removeCartItems(item) {
	return{
		type: REMOVE_CART_ITEM,
		payload: item
	}
}