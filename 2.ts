/* Задачи на enum и тс проверку 

  Задача 1. Написать тип для объекта, чтобы при добавлении нового значения в MyEnum, объект подсвечивался тс 		 ошибкой
  Задача 2. Написать такую обработку типов, чтобы в конструкции switch case, подсвечивалась тс ошибка, 
  когда не хватает поля из MyEnum

**/

enum MyEnum {
  A = 'A',
  B = 'B'
}

type objEnum = {
  [key in MyEnum] : string
}

// Задача 1
const obj: objEnum = {
  [MyEnum.A]: 'anyString',
  [MyEnum.B]: 'anyString2'
}

// Задача 2

const func = (type: MyEnum) => {
  switch(type) {
    case MyEnum.A:
      return 1 + 3 + 6 + 8
    case MyEnum.B:
      return 11 + 11111
    default:
      const check: never = type;
      return null;
  }
}
