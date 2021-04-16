<p align="center">
  <img src="/.github/anoucement_less.png" width="200" />
</p>

<!-- ![gyEmitter](/.github/anoucement_less.png) -->

<h1 align="center">
  gyEmitter
</h1>

<div align="center">
  <p align="center">gyEmitter é uma biblioteca para receber e emitir eventos (event handle).<p/>
<div/>

<h1 align="center">
  <img src="https://img.shields.io/github/languages/top/geni-sys/gyEmitter?style=for-the-badge" /> <space><space>
  <img src="https://img.shields.io/github/license/geni-sys/gyEmitter?style=for-the-badge" />
</h1>

gyEmitter é uma biblioteca para receber e emitir eventos (event handle).

🚧 **gyEmitter é apenas para estudos** 🚧

## Overview

este projeto foi criado para poder tratar de eventos de notificação desktop multi-platforma

## Contribuíndo

Este repositório é apenas para estudos, mas sente-se livre de fazer qualquer alteração e envia um _PR_ ou fazer um _fork_ próprio.

## Rodando

Você vai precisar unicamente de um [Browser](https://pt.wikipedia.org/wiki/Navegador_web) ou [Node.js](https://nodejs.org) instalado no seu computador para rodar esse app.

```bash
git clone https://github.com/geni-sys/gyEmitter.git
$ cd gyEmitter
$ yarn install
$ yarn dev
```

exemplo:

```ts
  import EventEmitter from './gyEmitter'
  
  EventEmitter.on("countdown-start", Notifyer.notify)
  EventEmitter.on("countdown-ent", Notifyer.clear)
  
  EventEmitter.emit("countdown-start", ...args?)
```

<br/>
