const https = require('https')
const qs = require('querystring')
const param = qs.stringify({
  'grant_type': 'client_credentials',
  'client_id': 'oyTAx16B12Kpee02HazULOxn',
  'client_secret': 'nwuA9Zjt74nVdIPDZavOHqVKeYz5GKRk'
})

async function getSecret (){
  return new Promise((resolve) => {
    https.get({
      hostname: 'aip.baidubce.com',
      path: '/oauth/2.0/token?' + param,
      agent: false
    }, (res) => {
      // res.pipe(process.stdout)
      let data = ''
      res.on('data', (d) => {
        data += d
      });
      res.on('end', () => {
        resolve(JSON.parse(data)['refresh_token'])
      })
    })
  })
}


module.exports = {
  getSecret
}

