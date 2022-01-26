import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { IProductService, IProductLiveApi } from '../models/ProductService';

export const productService = async (req: Request, res: Response) => {
    let idProd: string = req.params.id;
    console.log('productService id= ' + idProd);
    // get the post
    let result_live_api: AxiosResponse = await axios.get(`${(process.env.PRODUCT_LIVE_API_URL)}/${idProd}`);
    let result_review_api: AxiosResponse = await axios.get(`${(process.env.PRODUCT_REVIEW_API_URL)}/${idProd}`);
    let postLiveApi: IProductLiveApi = result_live_api.data;
    let productReview: IProductService = result_review_api.data;
    console.log('result_live_api data= ' + postLiveApi);
    console.log('result_review_api data= ' + result_review_api.data);
    return res.status(200).json({
        productReview: productReview,
        productLiveApi: postLiveApi, 
    });
};

const fetchProducts = async (req: Request, res: Response) => {
    let idProd: string = req.params.id;
    const promise1 = axios.get(`${(process.env.PRODUCT_REVIEW_API_URL)}/${idProd}`);
    const promise2 = axios.get(`${(process.env.PRODUCT_LIVE_API_URL)}/${idProd}`);
    Promise.all([promise1, promise2]).then(function (values) {
        console.log(values);
    });
};
