import OpenAI from "./OpenAI.js";

import type { LLMOptions } from "../../index.js";

class Opper extends OpenAI {
  static providerName = "opper";
  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://api.opper.ai/v3/compat/",
    model: "claude-sonnet-4-6",
    useLegacyCompletionsEndpoint: false,
  };
}

export default Opper;
