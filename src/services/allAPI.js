import commonAPI from "./commonAPI";
import SERVERURL from "./serverurl";


export const registerAPI = async (reqBody) => {
    // console.log(reqBody);
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}

export const loginAPI = async (reqBody) => {
    // console.log(reqBody);
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}

export const addProjectAPI = async (reqBody, reqHeader) => {
    // project/add
    return await commonAPI("POST", `${SERVERURL}/project/add`, reqBody, reqHeader)
}

// HOME PROJECT
export const homeProjectAPI = async () => {
    // project/add
    return await commonAPI("GET", `${SERVERURL}/get-home-projects`, "")
}

// USER PROJECTS
export const userProjectAPI = async (reqHeader) => {
    // project/add
    return await commonAPI("GET", `${SERVERURL}/user-projects`, "", reqHeader)
}

// ALL PROJECTS
export const allProjectAPI = async (reqHeader) => {
    // project/add
    return await commonAPI("GET", `${SERVERURL}/all-projects`, "", reqHeader)
}