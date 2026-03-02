import API from "./api"

const sendEmail = (formData) => API.post('/sendEmail', formData)

export default sendEmail