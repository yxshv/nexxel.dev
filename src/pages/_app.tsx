// src/pages/_app.tsx
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/app";
import type { Session } from "next-auth";

import "~/styles/globals.css";
import { trpc } from "~/utils/trpc";
import { AnimatePresence, motion } from "framer-motion";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-website-id="e75c2880-663f-4d11-9f53-6a4ed27b9000"
          src="https://umami.nxl.sh/umami.js"
        ></script>
      </Head>
      <SessionProvider session={session}>
        <AnimatePresence mode="wait" exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} />
        </AnimatePresence>
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
