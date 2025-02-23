export function haveCatChild(categories,id){
    return categories.filter(cat=>cat.parent_id==id).length>0?true:false;
};
export function isActive(list,id){
    return list.includes(id);
};
