const axios = require('axios').default;

axios.get('https://api.llama.fi/protocol/sushiswap')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});