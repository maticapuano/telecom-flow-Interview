# Telecom interview

This is a repository for interview of telecom flow.

Summary:
The following test proposes the development of a weather query application that can visualize the
Current forecast, next 5 days for the current city and 5 other selectable cities.

## Installation

Install [yarn](https://yarnpkg.com/).

```bash
yarn install
or
npm install
```

## Scripts

```bash
npm run dev
npm run start
npm run test

```

### Available routes

| Method   | Resource        | Description                                                                                                                                 |
| :------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `GET`   | `/v1/location`     |Return the city location data according to its ip                    |
| `GET`   | `/v1/current/:city?` | City is optional. Returns location data city or current location depending on ip-api and current weather                                                                                                                                                                               |
| `GET`    | `/v1/forecast/:city?`    | City is optional. Returns location data city or current location depending on ip-api and 5-day weather 


## Autor

[Matias Capuano](https://www.linkedin.com/in/matias-capuano/)
