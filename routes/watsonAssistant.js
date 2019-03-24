const watsonAssistant = require('watson-developer-cloud/assistant/v1')

// Construindo uma instância do chatbot (IBM Watson)
const assistant = new watsonAssistant({
    version: '2019-03-11',
    username: 'apikey',
    password: 'tW6LFXalQe0hdoO2Xlb7Mz1jJQxby79GN2_dkUMgrbxz',
    url: 'https://gateway.watsonplatform.net/assistant/api'
})

module.exports = assistant