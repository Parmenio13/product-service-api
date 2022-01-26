import { Router } from 'express';
const router: Router = Router();

import { productService } from '../controllers/product.service.controllers';
router.get('/product/:id', productService);

export default router;
