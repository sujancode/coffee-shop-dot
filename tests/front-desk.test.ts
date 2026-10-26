import { defineTest } from "@voice-agent/sdk";

// Run on every build in the test environment; production only takes a deployment whose tests passed.
export default [
  defineTest({
    name: "tells the caller today's hours with the tool",
    turns: [{ user: "Hi, what time are you open until today?", expect: { tool: "opening_hours" } }],
    criteria: ["The agent tells the caller the opening hours."],
  }),
  defineTest({
    name: "gives a price from the menu",
    turns: [{ user: "How much is a latte?" }],
    criteria: ["The agent says a latte costs $4.75 (or $5.25 with oat or almond milk) and does not invent another price."],
  }),
];
