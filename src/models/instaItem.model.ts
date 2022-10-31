import instaItems, { IInstaItem } from './instaItem.mongo';

const getAll = async () => {
  return await instaItems.find();
};

const create = async (itemData: IInstaItem) => {
  const iItem = new instaItems({
    image: itemData.image,
    name: itemData.name,
    type: itemData.type
  });

  const isUser = itemData.type === 'user';

  if (!isUser) {
    iItem.mediaCount = itemData.mediaCount;
  }

  return await iItem.save();
};

const updateById = async (itemid: string, updatedItemData: IInstaItem) => {
  const updatedData = await instaItems.findByIdAndUpdate(itemid, {
    $set: { ...updatedItemData }
  });

  return updatedData;
};

const deleteById = async (itemid: string) => {
  await instaItems.findByIdAndRemove(itemid);
};

export { getAll, create, updateById, deleteById };
