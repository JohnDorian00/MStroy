// Закомментить для юнит теста с джестом одну строку снизу
export
class TreeStore {
    items = [];
    assocItems = {};
    assocChildren = {};

    constructor(items) {
        // Создание ассоциативных массивов
        try {
            // Если передан массив, но внутри не объекты - вывод ошибки, возраст обнуленного объекта
            if (items && Array.isArray(items) && items.length > 0 && typeof items[0] !== "object") {
                console.error(new Date() + " | TreeStore | Неверные входные данные\n");
                return;
            }

            this.items = items;

            items.forEach((item)=> {
                // Ассоциативный массив элементов по id
                this.assocItems[item.id] = item;

                // Ассоциативный массив детей
                if (this.assocChildren.hasOwnProperty(item.parent)) {
                    this.assocChildren[item.parent].push(item.id);
                } else {
                    this.assocChildren[item.parent] = [item.id]
                }
            })
        } catch (e) {
            // Если ошибка во входных данных - обнулить все внутренние переменные, вывести ошибку
            this.items = [];
            this.assocItems = {};
            this.assocChildren = {};
            console.error(new Date() + " | TreeStore | Неверные входные данные\n" + e);
        }
    }

    // Вывод изначального массива
    getAll() {
        return this.items
    }

    // Получить элемент по id
    getItem(id) {
        return this.assocItems[id]
    }

    // Получить всех детей элемента по id
    getChildren(id) {
        if (this.assocChildren.hasOwnProperty(id)) {
            return this.assocChildren[id].map((childId)=>{
                return this.getItem(childId)
            })
        } else {
            return []
        }
    }

    // Получить всех детей элемента по id + детей всех детей
    getAllChildren(id) {
        return this.#getAllChildrenId([id]).map((id)=>{
            return this.getItem(id);
        })
    }

    // Рекурсивно получить всех родителей до корня
    getAllParents(id, outItems) {
        if (!outItems || !Array.isArray(outItems)) {
            outItems = [];
        }

        let item = this.getItem(id);
        if (item) {
            outItems.push(item);
            return this.getAllParents(item.parent, outItems);
        }
        outItems.shift();
        return outItems;
    }

    // Рекурсивно получить все id дочерних элементов (вывод в 1-мерном массиве), приватный метод
    #getAllChildrenId(arrId, outId) {
        if (!outId || !Array.isArray(outId)) {
            outId = [];
        }

        for (const id of arrId) {
            if (this.assocChildren.hasOwnProperty(id)) {
                outId.push(...this.assocChildren[id]);
                this.#getAllChildrenId(this.assocChildren[id], outId);
            } else {
                break;
            }
        }

        return outId;
    }
}

// Убрать коммент для юнит теста с джестом
// module.exports = TreeStore;