import { print, generateEvent } from "../as-sdk/massa-sc-std";

export function main(): void {
  print("Hello from Massa Smart Contract!");
  generateEvent("massa:event:contract-called");
}
