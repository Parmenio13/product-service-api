
export interface IProductService {
    //messageLiveApi: String;
    productId: string;
    averageReviewScore: string;
    numberOfReviews: string;
};

export interface IProductLiveApi extends IProductService {
    IProductService : String;
    id: String;
    product_type: string;
    model_number: string;
    name: string;
};