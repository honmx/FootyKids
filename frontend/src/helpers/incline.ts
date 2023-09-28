export const incline = (amount: number, singularForm: string, pluralForm1: string, pluralForm2: string) => {
  if (amount % 10 === 1 && amount !== 11) return singularForm;
  if (amount % 10 >= 2 && amount % 10 <= 4 && (amount % 100 < 12 || amount % 100 > 14)) return pluralForm1;
  return pluralForm2;
}