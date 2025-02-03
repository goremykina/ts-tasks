// 1. Напиши ТС тип который будет ключи делать из snake_case в camelCase

type SnakeToCamel<S extends string> = S extends `${infer Head}_${infer Tail}`
  ? `${Head}${Capitalize<SnakeToCamel<Tail>>}`
  : S;

type ConvertKeysToCamel<T> = {
  [K in keyof T as SnakeToCamel<K & string>]: T[K] extends object
    ? ConvertKeysToCamel<T[K]>
    : T[K];
};

type SnakeCaseObj = {
  user_id: number;
  user_name: string;
  nested_value: {
    some_key: boolean;
  };
};

type CamelCaseObj = ConvertKeysToCamel<SnakeCaseObj>;

// Результат:
// type CamelCaseObj = {
//   userId: number;
//   userName: string;
//   nestedValue: {
//     someKey: boolean;
//   };
// }
