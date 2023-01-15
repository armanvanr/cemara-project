import reportService from "../../Service/report";
import { REPORT_SENT, SET_DA_ANIMAL_CATEGORY, SET_DA_COMMUNITY, SET_DA_COMMUNITY_LIST, SET_DA_IMAGE_URL, SET_DA_LOCATION, SET_DA_PHONE_NUMBER } from "./types";

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

export const daReportSubmit = data => async dispatch =>{
    return reportService.daReportSend(data).then(()=>{
        dispatch({
            type: REPORT_SENT,
        });
    });
};