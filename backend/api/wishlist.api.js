const wishListItems = new Map();

//Add wishListItem method
export const save = ({itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate,Qty}) =>{
    const wishListItem = {itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate,Qty};
    wishListItems.set(wishListItem.itemID,wishListItem);
    return wishListItem;
};

//view wishListItem method
export const getAll = () =>{
    return [...wishListItems.values()];
};
