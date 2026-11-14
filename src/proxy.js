import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // as an default example, useful for later customizations
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
