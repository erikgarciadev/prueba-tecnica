# Prueba Tecnica - PokeApi

Live demo
https://list-pokemon.netlify.app/


## Development server local

First, run this command

```
npm install 
```

Second, run this command

```
npm run start 
```

Open http://localhost:3000 with your browser to see the result.


## Development server local with docker

First, run this command

```
docker build -t my-app:dev .
```

Second, run this command

```
docker run -it -p 3000:3000 my-app:dev
```

Open http://localhost:3000 with your browser to see the result.