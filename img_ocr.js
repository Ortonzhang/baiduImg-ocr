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

