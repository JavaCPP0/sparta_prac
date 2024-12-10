
const stages={};

export const createStage =(uuid)=>{
    stages[uuid] =[];
}

export const getStage =(uuid)=>{
    return stages[uuid];
}

export const setStage=(uuid,id)=>{
    return stages[uuid].push({id});
}