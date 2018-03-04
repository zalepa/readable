import * as API from "../utils/api";

export const REPLACE_CATEGORIES = 'REPLACE_CATEGORIES';

export function fetchCategories() {
    return function (dispatch) {
        API.Categories.all(categories => {
            dispatch({
                type: REPLACE_CATEGORIES,
                categories
            });
        });
    }
}