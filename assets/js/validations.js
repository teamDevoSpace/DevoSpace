
function validateName(name) {
    const nameRegex = /^[A-Za-z ]{3,}$/;
    return nameRegex.test(name);
}

function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateService(service) {
    return service.trim() !== '';
}

function validateExcelData(formData) {
    if ('name' in formData && !validateName(formData.name)) {
        return statusCodes.STATUS_NAME_INVALID;
    }

    if ('email' in formData && !validateEmail(formData.email)) {
        return statusCodes.STATUS_EMAIL_INVALID;
    }

    if ('phoneNumber' in formData && !validatePhoneNumber(formData.phoneNumber)) {
        return statusCodes.STATUS_PHONE_INVALID;
    }

    if ('service' in formData && !validateService(formData.service)) {
        return statusCodes.STATUS_SERVICE_EMPTY;
    }

    return statusCodes.STATUS_SUCCESS;
}

