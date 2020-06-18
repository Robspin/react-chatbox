import React from 'react';

export const CTX = React.createContext();

/*
{
    from: 'user'
    msg: 'hi'
    topic: 'general'

    state {
       general: [
          {msg}, {msg}, {msg}
       ]
       bonsai: [
          {msg}, {msg}, {msg}
       ]
    }
} 
*/
const initState = {
   general: [
      { from: 'hoofd', msg: 'brah' },
      { from: 'mark', msg: 'bro' },
      { from: 'tess', msg: 'siss!' }
   ],
   bonsai: [
      { from: 'sensei', msg: 'hey' },
      { from: 'bonsaiFreak', msg: 'yo' },
      { from: 'bonsaiFreak', msg: 'leer mij alles over bonsai' }
   ]
};

function reducer(state, action) {
   const { from, msg, topic } = action.payload;
   switch (action.type) {
      case 'RECEIVE_MESSAGE':
         return {
            ...state,
            [topic]: [
               ...state[topic],
               {
                  from,
                  msg
               }
            ]
         };
      default:
         return state;
   }
}

function Store(props) {
   const reducerHook = React.useReducer(reducer, initState);

   return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}

export default Store;
