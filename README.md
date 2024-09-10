## Przykłady w Angularze

### Basic

1. @Input komponetu poprzez tradycyjny [Dekorator @Input](/src/app/basic/@input/input-decorator/input-decorator.component.ts) oraz nową funkcje [input()](/src/app/basic/@input/input-function/input-function.component.ts) (Signal)
2. Specjalne [selektory](/src/app/basic/special-selectors/special-selectors.component.scss) takie jak `:host`, `:host-content`, `::ng-deep`
3. [ViewChild](src/app/flow-data/view-child) łapanie referencji i sprawdzanie jak działa parametr `{static: true}`

### Signals

1.

### Adwenced

5. Zaawansowane formularze i synchornizacja danych miedzy nimi

#### Dziedziczenie formularzy

[Dziedziczenie formularzy](src/app/forms-inheritance) - użycie dziedziczenia, gdzie komponenty potomne posiadają różne widoki, a komponent bazowy nie ma widoku lecz agreguje całą logikę:
Form component - odpowida za prezentacje obu stanów formulrzy:

- user-form-create: komponent z templatka do dodawania
- user-form-show: komponent z templatka do wyswietlania
- user-form: Gdzie logika jest w komponencie bez widoku:

### Templates

[@let](./src/app/templates/@let/let-variable/let-variable.component.html) - deklaracja zmiennej w zasiegu bloku. Zalety: skrócenie zapisu odnoszenia sie do zagniezdzonych elementów object. Poprawa czylenosci i przeniesienie logiki do zminnej `@let`

### Routing

### Forms

#### Dziedziczenie formularzy

[Dziedziczenie formularzy](src/app/forms-inheritance) - użycie dziedziczenia, gdzie komponenty potomne posiadają różne widoki, a komponent bazowy nie ma widoku lecz agreguje całą logikę:
Form component - odpowida za prezentacje obu stanów formulrzy:

- user-form-create: komponent z templatka do dodawania
- user-form-show: komponent z templatka do wyswietlania
- user-form: Gdzie logika jest w komponencie bez widoku:

#### Synchronizacja za pomoca `ViewChild`

### RxJS

### Lifecucle hooks

### Design patterns

#### Singelton

[singleton](/src/app/design%20pattrens/singleton) - używane w serwisach do dzielenia się ta samą informacją

## Przykłady w TS

Dekoratory

- [decoratror klasy](./src/app/TS/decorator/class-decorator/my.ts)
- [decoratror metody](./src/app/TS/decorator/method-decorator/method-decorator.ts)
- [decoratrory getterów i setterów](./src/app/TS/decorator/getter-decorator)
- [decoratrory właściwości](//src/app/TS/decorator/property-decorator/initialization.ts)
