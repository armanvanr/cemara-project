import { SET_DA_ANIMAL_CATEGORY, SET_DA_COMMUNITY, SET_DA_COMMUNITY_LIST, SET_DA_LOCATION, SET_DA_PHONE_NUMBER } from "./types";

export const daCommunitySelect = data => dispatch => {
    dispatch({
        type: SET_DA_COMMUNITY,
        payload: data,
    });
};

export const daCommunityList = list => dispatch => {
    dispatch({
        type: SET_DA_COMMUNITY_LIST,
        payload: list,
    });
};

export const daPhoneNumberInput = number => dispatch => {
    dispatch({
        type: SET_DA_PHONE_NUMBER,
        payload: number,
    });
};

export const daAnimalCategory = category => dispatch => {
    dispatch({
        type: SET_DA_ANIMAL_CATEGORY,
        payload: category,
    });
};

export const daLocation = location => dispatch => {
    dispatch({
        type: SET_DA_LOCATION,
        payload: location,
    });
};