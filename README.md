### Application
[![Build Status](https://travis-ci.org/generic-parking/parking-app.svg?branch=master)](https://travis-ci.org/generic-parking/parking-app)
### Docker Image
[![Docker Pulls](https://img.shields.io/docker/pulls/genericparking/parking-app.svg?maxAge=2592000)](https://hub.docker.com/r/genericparking/parking-app/)
[![Size and Layers](https://images.microbadger.com/badges/image/genericparking/parking-app.svg)](https://microbadger.com/images/genericparking/parking-app)
[![Docker Image Latest Version](https://images.microbadger.com/badges/version/genericparking/parking-app.svg)](http://microbadger.com/images/genericparking/parking-app)

---

## Parking APP

Aplicação que consome a [parking-api](https://github.com/generic-parking/parking-api).
Seu propósito é proporcionar o auto gerenciamento de um estacionamento corporativo.

**ATENÇÃO**: É necessário uma versão do [parking-api](https://github.com/generic-parking/parking-api) em execução para que esta aplicação seja executada.

## Ambiente Desenvolvimento
O gulp é reponsável por monitorar alterações no código fonte e atualizar a pasta `dist`, que está mapeada no container do nginx. Dessa forma, qualquer alteração em código será refletida na pasta `dist` e consequentemente na pasta `html` do nginx.
### Instalar dependências
    $ npm install -g gulp bower
    $ npm install
### Habilitar o gulp watch
    $ gulp
### Executar container
    $ docker run -d --name parking-app -v path/to/parking-app/nginx:/etc/nginx/conf.d/ -v path/to/parking-app/dist:/usr/share/nginx/html --add-host="api:CHANGE_TO_API_HOST" -p 8080:80 nginx

## Ambiente Produção
Seguir os passos para executar a [parking-api](https://github.com/generic-parking/parking-api).
Executar um container do parking-app.

### Criar um container
    $ docker run --name parking-app -d --add-host="api:CHANGE_TO_API_HOST" -p 8080:80 generic-parking/parking-app

