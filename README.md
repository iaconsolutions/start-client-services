# Projeto de Configuração PM2

Este projeto gera um arquivo `ecosystem.config.json` como base para iniciar e gerenciar serviços com o PM2.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/iaconsolutions/start-client-services.git
   cd start-client-services
   
2. Instale as dependências:

   ```bash
   cd start-client-services
   npm install
   ```
3. Gere o arquivo `ecosystem.config.json`:

    ```bash
    npm run start
    ```

## Instruções

1. **Configuração do Arquivo**:
   - O arquivo `ecosystem.config.json` contém a configuração necessária para iniciar os serviços.
   - Certifique-se de ajustar o caminho do script no campo `script` para o caminho atual do seu script.

   Exemplo de configuração:
   ```json
   {
     "apps": [
       {
         "name": "meu-servico",
         "script": "caminho/para/seu/script.js",
         "autorestart": true,
         "max_restarts": 3
       }
     ]
   }
