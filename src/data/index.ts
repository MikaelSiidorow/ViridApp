import { Item } from "../types";

export const itemDB: Item[] = [
  {
    ean: "6411200106142",
    name: "ELOVENA Cocoa",
    level: "positive",
    information: [
      "✅ Vegan",
      "✅ Recyclable packaging",
      "✅ Responsibly sourced cocoa",
      "✅ Halted business in Russia",
      "✅ Locally produced",
      "✅ No animal testing",
    ],
  },
  {
    ean: "15000071356",
    name: "NOKIAN TYRES Nordman SZ2",
    level: "negative",
    information: [
      "⛔️ Owns factory in Russia",
      "",
      "⚠️ Neglecting climate goals",
      "⚠️ High carbon footprint",
      "",
      "✅ Vegan",
    ],
  },
  {
    ean: "8710398519689",
    name: "DORITOS Guacamole Flavor",
    level: "negative",
    information: [
      "⛔️ Anti-union practices",
      "⛔️ Mandatory overtime work",
      "⛔️ Sells products in Russia",
      "",
      "⚠️ High health risk",
      "⚠️ Contains milk",
      "⚠️ High health risk",
      "⚠️ Non-recyclable packaging",
      "",
      "✅ Vegan",
    ],
  },
  {
    ean: "8413178123105",
    name: "VIDAL Dulcitar",
    level: "neutral",
    information: [
      "⚠️ Contains milk",
      "⚠️ Contains palm oil",
      "⚠️ Contains gelatin",
      "⚠️ High health risk",
      "",
      "✅ Recyclable packaging",
    ],
  },
];
