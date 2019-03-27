const Assistantv1 = require('watson-developer-cloud/assistant/v1');
const watsonConfig = new Assistantv1({
    version: '2019-18-03',
    username: 'apikey',
    password: 'tW6LFXalQe0hdoO2Xlb7Mz1jJQxby79GN2_dkUMgrbxz',
    url: 'https://gateway.watsonplatform.net/assistant/api/v1'
});
module.exports = watsonConfig;