const axios=require('axios') //only used for axios and maybe request but NOT fetch

async function make_api_call(url) {
    console.log("helperAPI GET "+url)
    let response= await axios.get(url)
    let body=await response.data
    console.log(body)
    return body
}

async function make_api_post(url, obj) {
    console.log("helperAPI POST "+url)
    let response= await axios.post(url, obj)
    let body=await response.data
    console.log(body)
    return body
}

module.exports = {make_api_call, make_api_post}