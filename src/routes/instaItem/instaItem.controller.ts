import { Request, Response } from 'express';
import {
  create,
  deleteById,
  getAll,
  updateById
} from '../../models/instaItem.model';

const httpGetAll = async (req: Request, res: Response) => {
  const items = await getAll();

  res.status(200).json({
    items
  });
};

const httpCreateItem = async (req: Request, res: Response) => {
  await create(req.body);

  res.status(200).json({
    message: 'created successfully'
  });
};

const httpUpdateItem = async (req: Request, res: Response) => {
  await updateById(req.params.itemId, req.body);

  res.status(200).json({
    message: 'updated successfully'
  });
};

const httpDeleteItem = async (req: Request, res: Response) => {
  await deleteById(req.params.itemId);

  res.status(200).json({
    message: 'deleted successfully'
  });
};

export { httpGetAll, httpCreateItem, httpUpdateItem, httpDeleteItem };
