export interface Transfer {
  id: string;
  amount: number;
  title: string;
  beneficiaryAddress?: string;
}

// `Partial` sprawia ze wszystkie pola sa opcjonalne: typ | undefined
type T1 = Partial<Transfer>;
// `Required` sprawia ze wszystkie pola sa wymagane - likwiduje opcjonalność
type T2 = Required<Transfer>;
// tutaj najpierw `Partial`, a następnie `Required`
type T3 = Required<Partial<Transfer>>;
// `Pick` wybierwa wskazane klucze/właściwości
type T4 = Pick<Transfer, 'id' | 'amount'>;
// `Omit` usuwa wybrane w klucze/właściwości
type T5 = Omit<Transfer, 'id' | 'amount'>;

// Type `Revelal` nic nie modyfukuje, a jedynie upraszcza wyświetlanie typu
type Reveal<T> = { [P in keyof T]: T[P] };
type RequiredFields<T, K extends keyof T> = Reveal<
  Required<Pick<T, K>> & Omit<T, K>
>;
type X = RequiredFields<{ a?: number; b?: number }, 'a'>;
