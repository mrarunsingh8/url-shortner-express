# URl Shortner
Build a RESTfull API for a URL Shortner.

## Author
- [@arun](https://github.com/mrarunsingh8)

## How to run

Clone the project

```bash
  git clone https://github.com/mrarunsingh8/url-shortner
```

Go to the project directory

```bash
  cd url-shortner
```

Install dependencies

```bash
  npm install
```

Start the server for development mode

```bash
  npm run dev
```
It will start a server for development use with url http://localhost:3000/.

Start the server production mode

```bash
  npm run start
```
It will start a server for production use.


## API Reference

#### Get `Url`

##### Get all Url's

```http
  GET /
```

##### Get a perticular `Url` by nanoid

```http
  GET /${nanoid}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nanoid`      | `nanoid` | **Required**. nanoid |

#### Short a new URL

```http
  POST /
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`      | `string` | **Required**. URL |
