import { FETCHING_ITEMS_START, FETCHING_ITEMS_SUCCESS, ADDING_ITEMS_START, ADDING_ITEMS_SUCCESS, EDIT_ITEM_START, EDIT_ITEM_SUCCESS, DELETE_ITEM_START, DELETE_ITEM_SUCCESS, HANDLE_ERROR } from '../actions/index'

const initialState = {
    item: {
        location: '',
        name: '',
        description: '',
        price: ''
    },
    items: [],
    isFetching: false,
    error: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCHING_ITEMS_START:
            return ({
                ...state,
                isFetching: true,
                error: ''
            })
        case FETCHING_ITEMS_SUCCESS:
            console.log(action.payload)
            return ({
                ...state,
                items: action.payload,
                isFetching: false
            })
        case ADDING_ITEMS_START:
            return ({
                ...state
            })
        case ADDING_ITEMS_SUCCESS:
            return ({
                ...state,
                item: action.payload,
                items: [...state.items, action.payload]
            })
        case EDIT_ITEM_START:
            return ({
                ...state
            })
        case EDIT_ITEM_SUCCESS:
            return ({
                ...state,
                item: action.payload
            })
        case DELETE_ITEM_START:
            return ({
                ...state
            })
        case DELETE_ITEM_SUCCESS:
            return ({
                ...state,
                items: state.items.filter((item) => {
                    return (item.id !== action.payload.id)
                })
            })
        case HANDLE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}