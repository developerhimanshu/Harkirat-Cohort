import {atom, selector} from 'recoil'

export const todosAtom = atom({
    key:'todosAtom',
    default:[{}]
});

export const filterAtom = atom({
    key:'filterAtom',
    default:""
})

export const filterSelector = selector({
    key: 'filterSelector',
    get:({get})=>{
        const todos = get(todosAtom);
        const filter = get(filterAtom);
        return filter.trim()===""?todos:todos.filter(x => 
            (x.title && x.title.includes(filter)) || 
            (x.description && x.description.includes(filter))
          );
          
    }
})