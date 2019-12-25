import * as env from 'dotenv';
import axios from 'axios';
import Koa from "koa";
import Router from "koa-router";
import bodyparser from 'koa-bodyparser';
import { conf } from './config';
import { Service } from './service';
import dd from 'dapenglib'
import { promises } from 'dns';

//console.log(process.env.COMPANYNAME);
env.config();

const app = new Koa();
const router = new Router();

// router.get("/news", async ctx => {
//   const service = new Service();
//   const usid = ctx.request.header["x-btcapi-usid"];
//   const data = await service.getNews(usid);
//   ctx.body = data;
// });


router.get("/api/news",async ctx => {
  const service = new Service();
  const usid = ctx.request.header["x-usid"];
  const appversion = ctx.request.header["appversion"];
  const dataNews =  service.getNews(conf.news_baseurl,usid,conf.news_apikey);  
  const dataServices =  service.getServices(conf.demo_baseurl,usid,conf.demo_apikey,appversion);
  const [newobj,tapobj] = await Promise.all([dataNews,dataServices]);
  const content ={news:newobj,taps:tapobj}; 
  ctx.body = content;
});




app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
console.log('success');