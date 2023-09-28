import moment from "moment/moment";

export const getCurrrentTimeStamp = (timeformat) => {
    return moment().format("LLL");
};