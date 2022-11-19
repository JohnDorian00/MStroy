const TreeStore = require('../TreeStore.js');

let items = [
    { id: 1, parent: 'root' },
    { id: 2, parent: 1, type: 'test' },
    { id: 3, parent: 1, type: 'test' },

    { id: 4, parent: 2, type: 'test' },
    { id: 5, parent: 2, type: 'test' },
    { id: 6, parent: 2, type: 'test' },

    { id: 7, parent: 4, type: null },
    { id: 8, parent: 4, type: null },
];

describe("TreeStore", () => {
    // Тест поведения при неверных входных данных
    test("TreeStore invalid input for constructor", () => {
        let emptyStore = new TreeStore(),
            wrongInputStore = new TreeStore(123),
            wrongArray = new TreeStore([123,123]);

        expect(emptyStore.getAll()).toStrictEqual([]) &&
        expect(wrongInputStore.getAll()).toStrictEqual([]) &&
        expect(wrongArray.getAll()).toStrictEqual([]);

        expect(emptyStore.getItem(0)).toBeUndefined() &&
        expect(wrongInputStore.getItem(0)).toBeUndefined() &&
        expect(wrongArray.getItem()).toStrictEqual([]);

        expect(emptyStore.getChildren(0)).toStrictEqual([]) &&
        expect(wrongInputStore.getChildren(0)).toStrictEqual([]) &&
        expect(wrongArray.getChildren()).toStrictEqual([]);

        expect(emptyStore.getAllChildren(0)).toStrictEqual([]) &&
        expect(wrongInputStore.getAllChildren(0)).toStrictEqual([]) &&
        expect(wrongArray.getAllChildren()).toStrictEqual([]);

        expect(emptyStore.getAllParents(0)).toStrictEqual([]) &&
        expect(wrongInputStore.getAllParents(0)).toStrictEqual([]) &&
        expect(wrongArray.getAllParents()).toStrictEqual([]);
    });

    const treeStore = new TreeStore(items);

    test("return value from getAll()", () => {
        expect(treeStore.getAll()).toBe(items);
    });

    test("return value from getItem()", () => {
        expect(treeStore.getItem(7)).toBe(items[6],);
    });

    test("return value from getChildren()", () => {
        expect(treeStore.getChildren(4)).toStrictEqual([items[6], items[7],]);
        expect(treeStore.getChildren(5)).toStrictEqual([]);
        expect(treeStore.getChildren(2)).toStrictEqual([items[3], items[4], items[5],]);
    });

    test("return value from getAllChildren()", () => {
        expect(treeStore.getAllChildren(2)).toStrictEqual([items[3], items[4], items[5], items[6], items[7],]);
    });

    test("return value from getAllParents()", () => {
        expect(treeStore.getAllParents(7)).toStrictEqual([items[3], items[1], items[0],]);
    });
});