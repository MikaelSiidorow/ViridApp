export interface Item {
  ean: string;
  level: Level;
  information: string[];
  name: string;
}

type Level = "negative" | "neutral" | "positive";
