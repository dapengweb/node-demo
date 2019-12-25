import * as env from "dotenv"

export interface Config{
    news_baseurl:string;
    news_apikey:string;
    demo_baseurl:string;
    demo_apikey:string;
}

env.config();

export const conf:Config={
    news_baseurl:process.env.NEWS_BASEURL,
    news_apikey:process.env.NEWS_APIKEY,
    demo_baseurl:process.env.DEMO_BASEURL,
    demo_apikey:process.env.DEMO_APIKEY
}

