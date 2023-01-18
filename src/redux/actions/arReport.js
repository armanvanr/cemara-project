import reportService from "../../Service/report";
import { REPORT_SENT, SET_AR_ADDRESS, SET_AR_ANIMAL_NAME, SET_AR_ANIMAL_TYPE, SET_AR_CITY, SET_AR_COMMUNITY, SET_AR_COMMUNITY_LIST, SET_AR_COMMUNITY_STATUS, SET_AR_EMAIL, SET_AR_IMAGE_URL, SET_AR_NAME, SET_AR_PHONE_NUMBER, SET_AR_PROVINCE } from "./types"


export const arAnimalType = data => dispatch => {
    dispatch({
        type: SET_AR_ANIMAL_TYPE,
        payload: data,
    });
};

export const arAnimalName = data => dispatch => {
    dispatch({
        type: SET_AR_ANIMAL_NAME,
        payload: data,
    });
};

export const arImageUrl = data => dispatch => {
    dispatch({
        type: SET_AR_IMAGE_URL,
        payload: data,
    });
};

export const arName = data => dispatch => {
    dispatch({
        type: SET_AR_NAME,
        payload: data,
    });
};

export const arEmail = data => dispatch => {
    dispatch({
        type: SET_AR_EMAIL,
        payload: data,
    });
};

export const arPhoneNumber = data => dispatch => {
    dispatch({
        type: SET_AR_PHONE_NUMBER,
        payload: data,
    });
};

export const arAddress = data => dispatch => {
    dispatch({
        type: SET_AR_ADDRESS,
        payload: data,
    });
};

export const arProvince = data => dispatch => {
    dispatch({
        type: SET_AR_PROVINCE,
        payload: data,
    });
};

export const arCity = data => dispatch => {
    dispatch({
        type: SET_AR_CITY,
        payload: data,
    });
};

export const arCommunity = data => dispatch => {
    dispatch({
        type: SET_AR_COMMUNITY,
        payload: data,
    });
};

export const arCommunityList = data => dispatch => {
    dispatch({
        type: SET_AR_COMMUNITY_LIST,
        payload: data,
    });
};

export const arCommunityStatus = data => dispatch =>{
    dispatch({
        type: SET_AR_COMMUNITY_STATUS,
        payload: data,
    })
}

export const arReportSubmit = data => async dispatch =>{
    return reportService.arReportSend(data).then(()=>{
        dispatch({
            type: REPORT_SENT,
        });
    });
};
