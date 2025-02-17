import { PageClient } from "@/app/(home)/client";
import { HydrateClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

export default async function Home() {
  void trpc.hello.prefetch({ text: "world" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>loading...</p>}>
        <ErrorBoundary fallback={<p>error...</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
