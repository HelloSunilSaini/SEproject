import {CRM_ADDR} from '../../constants/http';

export function isMobileExistInCrm(mob) {
    return fetch(CRM_ADDR + `v1/farmerdetails/basic/?phoneNumber=${mob}`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'X-Authorization-Token': localStorage.getItem("b2bToken"),
            'Source': "CSRMH",
        },
    })
        .then(res => res.json())
        .then((result) => {
            if (result.responseData.hasOwnProperty("farmerId")) {
                return true
            }
            else {
                return false
            }
        },
            (error) => {
                console.log(error)
                return false
            }
        ).catch((error) => { console.log(error) });
}

export function ValidateMobileFormate(mob) {
    if (mob === "" || mob === undefined || mob === null) {
        return { status: true, message: "Empty field" }
    }
    const pattern = new RegExp("^[6-9][0-9]{9}$")
    var ismatched = pattern.test(mob)
    if (ismatched) {
        return { status: true, message: "matched" }
    }
    else {
        return { status: false, message: "incorrect mobile number" }
    }
}


export function ValidateEmailFormate(email) {
    if (email === "" || email === undefined || email === null) {
        return { status: true, message: "Empty field" }
    }
    const pattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
    var ismatched = pattern.test(email)
    if (ismatched) {
        return { status: true, message: "matched" }
    }
    else {
        return { status: false, message: "incorrect Email Address" }
    }
}


export function ValidatePhoneNumberFormate(phone) {
    if (phone === "" || phone === undefined || phone === null) {
        return { status: true, message: "Empty field" }
    }
    const pattern = new RegExp("^[0-9]{5}([- ]*)[0-9]{6}$")
    var ismatched = pattern.test(phone)
    if (ismatched) {
        return { status: true, message: "matched" }
    }
    else {
        return { status: false, message: "incorrect Phone number" }
    }
}


export function ValidatePincodeFormate(pin) {
    if (pin === ""||pin === undefined || pin === null) {
        return { status: true, message: "Empty field" }
    }
    const pattern = new RegExp("^[1-9][0-9]{5}$")
    var ismatched = pattern.test(pin)
    if (ismatched) {
        return { status: true, message: "matched" }
    }
    else {
        return { status: false, message: "incorrect Pincode" }
    }
}

export function ValidateLandMark(landMark) {
    // if (landMark == ""){
    //     return {status : true, message : "empty"}
    // }
    if (landMark.length >= 5){
        return { status: true, message: "landmark ok"}
    }
    else {
        return { status: false, message: "Landmark should have minimum 5 characters."}
    }
}

export function ValidatePanNumberFormate(pan) {
    if (pan === "" || pan === undefined || pan === null) {
        return { status: true, message: "Empty field" }
    }
    const pattern = new RegExp("^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$")
    var ismatched = pattern.test(pan)
    if (ismatched) {
        return { status: true, message: "matched" }
    }
    else {
        return { status: false, message: "incorrect pan number" }
    }
}

export function ValidateIfcscodeFormate(ifsc) {
    if (ifsc === "" || ifsc === undefined || ifsc === null) {
        return { status: true, message: "Empty field" }
    }
    const pattern = new RegExp("^[A-Za-z]{4}[a-zA-Z0-9]{7}$")
    var ismatched = pattern.test(ifsc)
    if (ismatched) {
        return { status: true, message: "matched" }
    }
    else {
        return { status: false, message: "incorrect Ifsc code" }
    }
}

export function ValidateGstNumberFormate(gst) {
    if (gst === "" || gst === undefined || gst === null) {
        return { status: true, message: "Empty field" }
    }
    const pattern = new RegExp("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9][Z]{1}[A-Z0-9]{1}$")
    var ismatched = pattern.test(gst)
    if (ismatched) {
        return { status: true, message: "matched" }
    }
    else {
        return { status: false, message: "incorrect Gst number" }
    }
}


export function ValidateIntegerFormat(integer,type) {
    if (integer === "") {
        return { status: false, message: "Empty field" }
    }
    const pattern = new RegExp("^[1-9][0-9]*$")
    var ismatched = pattern.test(integer)
    if (ismatched) {
        return { status: true, message: "matched" }
    }
    else {
        if (type === "amount"){
            return { status: false, message: "*invalid Amount" }
        } else if (type === "creditTime") {
            return { status: false, message: "*invalid credit time"}
        }
        return { status: false, message: "*invalid field" }
    }
}




