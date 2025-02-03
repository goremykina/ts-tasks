/* Задача написать тип для myAddEventListener, чтобы он брал тип для handler, в зависимости от type,
   которые обозначены в EventMap

    1. type Может быть только ключами из EventMap
    2. handler это тип функции соответствующей type из EventMap


  myAddEventListener('onSubmit', )
  Тип должен быть (event: SubmitEvent) => void

  myAddEventListener('onClick', )
  Тип должен быть (event: MouseEvent) => void
 */

interface EventMap {
  onClick: (event: MouseEvent) => void
  onTouch: (event: TouchEvent) => void
  onSubmit: (event: SubmitEvent) => void
} 

const myAddEventListener = <T extends keyof EventMap>(
  type: T,
  handler: EventMap[T]
) => {
  console.log(type, handler);
};


myAddEventListener('onSubmit', (event: SubmitEvent) => {});
myAddEventListener('onTouch', (event: TouchEvent) => {});
myAddEventListener('onClick', (event: MouseEvent) => {})
