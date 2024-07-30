const fs = require('fs')

const config = {
    "apps": [
        {
            "name": "service-monitor",
            "script": "caminho/para/seu/index.js",
            "autorestart": true,
            "max_restarts": 3
        },
        {
            "name": "telegram-alert-microservice",
            "script": "caminho/para/seu/src/server.js",
            "autorestart": true,
            "max_restarts": 3
        }
    ]
}

fs.writeFile('ecosystem.config.json', JSON.stringify(config, null, 4), (err) => {
    if (err) {
        console.error('Erro ao criar o arquivo:', err)
    } else {
        console.log('Arquivo ecosystem.config.json criado com sucesso!')
    }
})
