# Coffee shop front desk

An example dot: the phone front desk of Brew & Bean, a coffee shop.

- `agent.config.ts`: who the agent is and what it does
- `knowledge/`: what it knows (menu, prices, the shop)
- `tools/index.ts`: `opening_hours`, your own code run during a call
- `tests/`: scripted calls judged on every build; production only takes a deployment that passed

Import this repository as a new project in the dashboard: every push to `main` is built,
deployed to test and tested. Promote a passing deployment to go live.

From a terminal instead: `npm install`, `npx polka login --key va_test_…`,
`npx polka deploy`, `npx polka test`.
