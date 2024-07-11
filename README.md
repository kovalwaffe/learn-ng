### Przykłady w Angularze

### Basic

1. [Komponent standalone](src/app/stand) - czysty nowy komponent z zaimportowanym modułem `CommonModile`
2. Input komponetu poprzez [Dekorator @Input](/src/app/basic/@input/input-decorator/input-decorator.component.ts) oraz funkcje [input()](/src/app/basic/@input/input-function/input-function.component.ts) (Signal)
1. [ViewChild](src/app/flow-data/view-child) łapanie referencji i sprawdzanie jak dziła parametr `static`
2. Zaawansowane formularze i synchornizacja danych miedzy nimi

#### Dziedziczenie formularzy

[Dziedziczenie formularzy](src/app/forms-inheritance) - użycie dziedziczenia, gdzie komponenty potomne posiadają różne widoki, a komponent bazowy nie ma widoku lecz agreguje całą logikę:
Form component - odpowida za prezentacje obu stanów formulrzy:

- user-form-create: komponent z templatka do dodawania
- user-form-show: komponent z templatka do wyswietlania
- user-form: Gdzie logika jest w komponencie bez widoku:

### Templates

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
