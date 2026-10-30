import { defineTools } from "polka-cli";

// Your own code, run by the platform during a call. `env` is the environment's variables:
//   polka vars set OPENING_HOURS "7am to 6pm"   (or Variables on the project's page)
export default defineTools({
  opening_hours: {
    description: "Today's opening hours. Call it whenever the caller asks when we are open or close.",
    run: (_args, { env }) => `Brew & Bean is open ${env.OPENING_HOURS ?? "7am to 7pm"} today.`,
  },
});
