import { CLEAR_STATE, SET_AR_ADDRESS, SET_AR_ADD_INFO, SET_AR_ANIMAL_NAME, SET_AR_ANIMAL_TYPE, SET_AR_CITY, SET_AR_COMMUNITY, SET_AR_COMMUNITY_LIST, SET_AR_COMMUNITY_STATUS, SET_AR_EMAIL, SET_AR_IMAGE_URL, SET_AR_NAME, SET_AR_PHONE_NUMBER, SET_AR_PROVINCE } from "../actions/types";

const initialState = {
    reportType: "rescueReport",
    animalType: "",
    animalName: "",
    imageUrl: "",
    addInfo: "",
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    province: "",
    city: "",
    community: "allComms",
    communityList: [],
    communityStatus: ""
};

const arReport = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_AR_ANIMAL_TYPE:
            return {
                ...state,
                animalType: payload,
            };
        case SET_AR_ANIMAL_NAME:
            return {
                ...state,
                animalName: payload,
            };
        case SET_AR_IMAGE_URL:
            return {
                ...state,
                imageUrl: payload,
            };
        case SET_AR_ADD_INFO:
            return {
                ...state,
                addInfo: payload,
            };
        case SET_AR_NAME:
            return {
                ...state,
                name: payload,
            };
        case SET_AR_EMAIL:
            return {
                ...state,
                email: payload,
            };
        case SET_AR_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: payload,
            };
        case SET_AR_ADDRESS:
            return {
                ...state,
                address: payload,
            };
        case SET_AR_PROVINCE:
            return {
                ...state,
                province: payload,
            };
        case SET_AR_CITY:
            return {
                ...state,
                city: payload,
            };
        case SET_AR_COMMUNITY:
            return {
                ...state,
                community: payload,
            };
        case SET_AR_COMMUNITY_LIST:
            return {
                ...state,
                communityList: payload,
            };
        case SET_AR_COMMUNITY_STATUS:
            return {
                ...state,
                communityStatus: payload,
            };
        case CLEAR_STATE:
            return initialState;
        default:
            return state;
    };
};

export default arReport;