import * as Sentry from "@sentry/react";
import { SENTRY_DSN } from "@/shared/config/sentry";

const integrations = new Sentry.BrowserTracing();
const options = {
  dsn: SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
};

Sentry.init(options);
