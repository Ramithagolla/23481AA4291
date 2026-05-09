import { Log } from "./logger";

export { Log } from "./logger";
async function testLog() {
  await Log(
    "backend",
    "info",
    "service",
    "Logging middleware working successfully"
  );
}

testLog();