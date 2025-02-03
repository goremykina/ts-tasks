/* Задача на понимание infer. Ее нужно решить именно через infer

    Тебе дан тип, где есть дженерик T, который является промисом.
    Тебе нужно написать тип возвращаемой функции который будет таким:
    Если в дженерик тип был передан Promise<number>, то возвращаемый тип будет true, иначе false
 */

type FuncType<T extends Promise<number | string | boolean | symbol>> = 
  T extends Promise<infer U>
  ? U extends number
    ? true
    : false
  : never;

type Test1 = FuncType<Promise<number>>
type Test2 = FuncType<Promise<string>>
