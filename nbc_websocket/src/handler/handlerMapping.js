import {handleMatch} from './battle/match.handler.js';
import {handleChat} from './chat/caht.handler.js';

export const handlerMapping ={
    11:handleChat,
}

export const BattleHandlingmapping ={
    101: handleMatch,
}