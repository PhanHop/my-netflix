import { FETCH_NETFLIX_ORIGINALS } from "../action";
const initialState = {

}
export default function(state=initialState, action){
    switch (action.type) {
        case FETCH_NETFLIX_ORIGINALS:
            const data = action.payload.data.results;
            return {...state, data};
        default:
            return state;
    }
}