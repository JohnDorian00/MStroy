# MStroy test

## Результаты работы программы
getAll();<br>
![img.png](readme_images/img.png)
<br>getItem(7);<br>
![img_1.png](readme_images/img_1.png)
<br>getChildren(4);<br>
![img_2.png](readme_images/img_2.png)
<br>getChildren(5);<br>
![img_3.png](readme_images/img_3.png)
<br>getChildren(2);<br>
![img_4.png](readme_images/img_4.png)
<br>getAllChildren(2);<br>
![img_5.png](readme_images/img_5.png)
<br>getAllParents(7);<br>
![img_6.png](readme_images/img_6.png)

## Результаты теста 
### (3 ошибки в начале предусмотрены классом - три раза в тесте создавался экземпляр с невалидными входными данными)
<br>
E:\Progs\Nodejs\npm.cmd test

> mstroy@1.0.0 test
> jest

console.error
Sat Nov 19 2022 04:14:48 GMT+0300 (Москва, стандартное время) | TreeStore | Неверные входные данные
<br>TypeError: Cannot read properties of undefined (reading 'forEach')

      33 |             this.assocItems = {};
      34 |             this.assocChildren = {};
    > 35 |             console.error(new Date() + " | TreeStore | Неверные входные данные\n" + e);
         |                     ^
      36 |         }
      37 |     }
      38 |

      at new error (TreeStore.js:35:21)
      at Object.<anonymous> (tests/getAll.test.js:19:26)

console.error                                                                                                                                                                                                                      
Sat Nov 19 2022 04:14:48 GMT+0300 (Москва, стандартное время) | TreeStore | Неверные входные данные                                                                                                                              
TypeError: items.forEach is not a function

      33 |             this.assocItems = {};
      34 |             this.assocChildren = {};
    > 35 |             console.error(new Date() + " | TreeStore | Неверные входные данные\n" + e);
         |                     ^
      36 |         }
      37 |     }
      38 |

      at new error (TreeStore.js:35:21)
      at Object.<anonymous> (tests/getAll.test.js:20:31)

console.error                                                                                                                                                                                                                      
Sat Nov 19 2022 04:14:48 GMT+0300 (Москва, стандартное время) | TreeStore | Неверные входные данные


      11 |             // Если передан массив, но внутри не объекты - вывод ошибки, возраст обнуленного объекта
      12 |             if (items && Array.isArray(items) && items.length > 0 && typeof items[0] !== "object") {
    > 13 |                 console.error(new Date() + " | TreeStore | Неверные входные данные\n");
         |                         ^
      14 |                 return;
      15 |             }
      16 |

      at new error (TreeStore.js:13:25)
      at Object.<anonymous> (tests/getAll.test.js:21:26)


PASS  tests/getAll.test.js
TreeStore <br>
√ TreeStore invalid input for constructor (28 ms)                                                                                                                                                                                
√ return value from getAll() (1 ms)                                                                                                                                                                                              
√ return value from getItem() (1 ms)                                                                                                                                                                                             
√ return value from getChildren()                                                                                                                                                                                                
√ return value from getAllChildren()                                                                                                                                                                                             
√ return value from getAllParents()

Test Suites: 1 passed, 1 total                                                                                                                                                                                                       
Tests:       6 passed, 6 total                                                                                                                                                                                                       
Snapshots:   0 total
Time:        0.407 s, estimated 1 s
Ran all test suites.

Process finished with exit code 0