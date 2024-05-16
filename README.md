### Spis treści
#### Angular
##### Basic
1. [Komponent standalone](src/app/stand) - czysty nowy komponent z zaimportowanym modułem `CommonModile`
1. [ViewChild](src/app/flow-data/view-child) łapanie referencji i sprawdzanie jak dziła parametr `static`
2. Zaawansowane formularze i synchornizacja danych miedzy nimi
#### Dziedziczenie formularzy
[Dziedziczenie formularzy](src/app/forms-inheritance) - użycie dziedziczenia, gdzie komponenty potomne posiadają różne widoki, a komponent bazowy nie ma widoku lecz agreguje całą logikę:
  Form component - odpowida za prezentacje obu stanów formulrzy:
  - user-form-create: komponent z templatka do dodawania
  - user-form-show: komponent z templatka do wyswietlania
  - user-form: Gdzie logika jest w komponencie bez widoku:
#### Synchronizacja za pomoca `ViewChild`
