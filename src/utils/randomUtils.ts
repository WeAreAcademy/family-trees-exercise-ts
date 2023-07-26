export function randomWord(): string {
  const consonants: string[] = "bcdfghjklmnpqrstvwxyz".split("");
  const vowels: string[] = "aeiou".split("");
  const letters: string[] = [];
  letters.push(pick(consonants).toUpperCase());
  letters.push(pick(vowels));
  letters.push(pick(consonants));
  letters.push(pick(vowels));
  letters.push(pick(consonants));

  return letters.join("");
}
export function pick<T>(arr: T[]): T {
  const ix = Math.floor(Math.random() * arr.length);
  return arr[ix];
}
