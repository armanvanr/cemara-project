import {
    CLEAR_STATE,
    SET_DA_ANIMAL_CATEGORY,
    SET_DA_COMMUNITY,
    SET_DA_COMMUNITY_LIST,
    SET_DA_COMMUNITY_STATUS,
    SET_DA_IMAGE_URL,
    SET_DA_LOCATION,
    SET_DA_PHONE_NUMBER,
} from "../actions/types";

const initialState = {
    reportType: "invasionReport",
    phoneNumber: "",
    imageUrl: null,
    animalCategory: "venomous",
    location: { address: "", city: "", province: "" },
    community: "allComms",
    communityList: [],
    communityStatus: false,
};

const daReport = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_DA_COMMUNITY:
            return {
                ...state,
                community: payload,
            };
        case SET_DA_COMMUNITY_LIST:
            return {
                ...state,
                communityList: [payload],
            };
        case SET_DA_COMMUNITY_STATUS:
            return {
                ...state,
                communityStatus: payload,
            };
        case SET_DA_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: payload,
            };
        case SET_DA_ANIMAL_CATEGORY:
            return {
                ...state,
                animalCategory: payload,
            };
        case SET_DA_LOCATION:
            return {
                ...state,
                location: payload,
            };
        case SET_DA_IMAGE_URL:
            return {
                ...state,
                imageUrl: payload,
            };
        case CLEAR_STATE:
            return initialState;
        default:
            return state;
    };
};

export default daReport;
