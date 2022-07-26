export function printBanner(txt: string): void {
  console.log();
  console.log(`${"=".repeat(20)}   ${txt}   ${"=".repeat(40 - txt.length)}`);
}
