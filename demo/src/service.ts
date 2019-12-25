import axios from "axios";
import { conf } from './config';

export class Service{
    private _createaxios(url:string,headers:any){
        const instance = axios.create({
            baseURL:url,
            timeout:1000,
            headers:headers
        });
        return instance;
    }

    async getNews(host:string,usid:string,apikey:string){
        //const host=conf.news_baseurl;
        //const apikey=conf.news_apikey;

        const hearders={
            'X-AppKey': apikey,
            'x-btcapi-usid': usid
    
        };
        const client = this._createaxios(host,hearders);
        let res = await client.get("/api/news");
        return res.data;
       
    }

    async getServices(host:string,usid:string,apikey:string,appversion:string){
        //const host=conf.demo_baseurl;
        //const apikey=conf.demo_apikey;
        const hearders={
            'AppKey': apikey,
            'AppVersion': appversion
    
        };
        const client = this._createaxios(host,hearders);
        let res = await client.get("api/servicemanager/v0/discoverallservices/v1?region=cn&locale=zh-cn&client=IOS&brand=1");
        return res.data;
    }
  
}

export const sum=(a:number,b:number)=>{return a+b};