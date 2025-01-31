/* Напиши тайпгард чтобы тс автоматически понимал какой тип использовать **/

interface TypeA {
  a: number
  c: string
}

interface TypeB {
  a: string
  d: number
}

const func = (type: TypeA | TypeB): string | number => {

  if ("d" in type) {
    return type.d
  } else {
    return type.c
  }
}

const objA: TypeA = { a: 10, c: "Hello" };
const objB: TypeB = { a: "test", d: 42 };

console.log(func(objA))
console.log(func(objB))
