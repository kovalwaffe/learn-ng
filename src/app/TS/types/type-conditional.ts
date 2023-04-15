type Skills = string | string[] | null | undefined;

// distributive / rozłączne
// `NonNullable` zamienia null | undefined na never (zbór pusty) który jest uzuwany w unii
type NonNullableSkills = NonNullable<Skills>; // string | strings[]

// NAKED

