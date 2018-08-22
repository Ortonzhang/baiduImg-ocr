const { getSecret } = require('./create_secret')
// const request = require('request')
const url = 'http://static.segmentfault.com/sponsor/20180822.png'
const options = {
  url, 
  encoding: null
}

// async const getImgBase = () =>{
//   return new Promise((resolve, reject) => {
//     request(options, (err, response, buffer) => {
//       if(err){
//         console.log(err)
//         return
//       }
//       var base64Img = buffer.toString('base64')
//       resolve(base64Img)
//     })
//   })
// }

async function test(){
  let secret = await getSecret()
  console.log(secret)
}

test()



// const url = 'http://static.segmentfault.com/sponsor/20180822.png'

// const api_key = 'YPIsKZK0wRwjKonhBqStegxJxd-Ai89M'

// const api_secret = 'iOHWkbHERjyScG7eeCvKb0m0DUVz_acs'

// const request = require('request')

// const image = ''

// let options  = {
//     url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=24.f1f421fc1e519aaeedc21f29e6d80b33.2592000.1537528142.282335-11714420',
    
//     header:{
//         "content-type": 'application/x-www-form-urlencoded'
//     },
//     form:{
//         image
//     }
// }

// request.post(options, (error,response, body) => {
//     // console.log(options)
//     if(error){
//         console.log('error ==>' + error)
//     } else {
//         console.log(response.body)
//     }
    
// })

