import express from 'express';
import { authorize } from '../../middlewares/auth';
import { instaItemValidation } from '../../middlewares/validations';

const instaItemRouter = express.Router();

import {
  httpGetAll,
  httpCreateItem,
  httpDeleteItem,
  httpUpdateItem
} from './instaItem.controller';

instaItemRouter.get('/', httpGetAll);
instaItemRouter.post('/create', authorize, instaItemValidation, httpCreateItem);
instaItemRouter.put('/:itemId', httpUpdateItem);
instaItemRouter.delete('/:itemId', httpDeleteItem);

export default instaItemRouter;
