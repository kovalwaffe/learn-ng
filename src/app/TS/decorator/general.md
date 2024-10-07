#### Dekoratory mogą być używane do różnych celów, takich jak:

- Modyfikacja lub rozszerzenie zachowania klas i metod
- Dodawanie metadanych
- Implementacja aspektów (jak logowanie czy zarządzanie transakcjami)
- Wstrzykiwanie zależności

W praktyce, dekoratory pozwalają na bardziej deklaratywne programowanie i mogą znacznie uprościć kod poprzez wyodrębnienie powtarzających się wzorców lub zachowań.

```typescript
// target: unknown - to dekorowany element (klasa, metoda, itp.).
// context: unknown - to obiekt zawierający metadane i narzędzia związane z dekorowanym elementem.
function Decorators(target: unknown, context: unknown) {
  // rodzaj dekorowanego elementu. Może to być jedna z wartości: ['class', 'method', 'getter', 'setter', 'field', 'accessor']
  context.kind;

  // Nazwa elementu, może być typu Symbol lub String.
  context.name;

  // wskaźnik, czy element jest prywatny.
  context.private;

  // wskaźnik, czy element jest statyczny.
  context.static;

  // Obiekt zawierający metody get i/lub set, umożliwiające odczyt/zapis bazowej wartości obiektu.
  context.access;

  // Funkcja pozwalająca na zarejestrowanie funkcji callback, która zostanie wykonana albo gdy klasa jest definiowana, albo gdy tworzony jest jej instancja.
  context.addInitializer(() => {});
}
```

