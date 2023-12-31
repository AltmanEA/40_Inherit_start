import { Board, BoardParam } from "./Board";


export class BoardBalda extends Board {
    constructor(
        str: string[] | string = "балда",
        init: boolean = true
    ) {
        // TODO
        // Если длина str==5, то дополняет ее 10 пробелами до и после
        // Вызывает родительский конструктор,
        //  если init, то дополнительно инициализируются
        //  статические поля класса
            super(str)

    }
    clone(init: boolean = false): Board {
        // TODO
        // Функция должна вернуть копию объекта
        // Если init, то дополнительно инициализируются
        //  статические поля класса
        return this
    }
}

export const BoardBaldaParam: BoardParam = {
    row: 5,
    col: 5
}