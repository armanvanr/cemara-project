import reportService from "../../Service/report";
import { CLEAR_STATE, SET_DA_ANIMAL_CATEGORY, SET_DA_COMMUNITY, SET_DA_COMMUNITY_LIST, SET_DA_COMMUNITY_STATUS, SET_DA_IMAGE_URL, SET_DA_LOCATION, SET_DA_PHONE_NUMBER } from "./types";

export const daCommunitySelect = data => dispatch => {
    dispatch({
        type: SET_DA_COMMUNITY,
        payload: data,
    });
};

export const daCommunityList = data => dispatch => {
    dispatch({
        type: SET_DA_COMMUNITY_LIST,
        payload: data,
    });
};

export const daCommunityStatus = data => dispatch => {
    dispatch({
        type: SET_DA_COMMUNITY_STATUS,
        payload: data,
    })
}

export const daPhoneNumberInput = data => dispatch => {
    dispatch({
        type: SET_DA_PHONE_NUMBER,
        payload: data,
    });
};

export const daAnimalCategory = data => dispatch => {
    dispatch({
        type: SET_DA_ANIMAL_CATEGORY,
        payload: data,
    });
};

export const daLocation = data => dispatch => {
    dispatch({
        type: SET_DA_LOCATION,
        payload: data,
    });
};

export const daImageUrl = data => dispatch => {
    dispatch({
        type: SET_DA_IMAGE_URL,
        payload: data,
    });
};

export const clearDAState = () => dispatch => {
    dispatch({
        type: CLEAR_STATE,
    });
};