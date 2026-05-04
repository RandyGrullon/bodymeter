"use client";

import Link from "next/link";
import { getEatyPublicOrigin } from "@/lib/env-public";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Link2, Utensils, Dumbbell } from "lucide-react";

export default function IntegracionPage() {
  const eaty = getEatyPublicOrigin();

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Eaty + Body Matter</h1>
      <p className="text-sm text-muted-foreground">
        Ambas apps usan el mismo proyecto Firebase. Si inicias sesión con la
        misma cuenta, tus rutinas, entrenos y medidas son las mismas.
      </p>

      <div className="relative flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-center sm:gap-10">
        <div className="animate-in fade-in zoom-in-95 flex w-full max-w-[200px] flex-col items-center rounded-2xl border-2 border-primary/40 bg-card p-6 shadow-lg duration-500 sm:max-w-[220px]">
          <Utensils className="h-10 w-10 text-primary" aria-hidden />
          <p className="mt-3 text-center font-semibold">Eaty</p>
          <p className="mt-1 text-center text-xs text-muted-foreground">
            Nutrición y comidas
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
          <div className="flex items-center gap-1 text-primary">
            <span className="hidden h-px w-8 animate-pulse bg-primary sm:block" />
            <Link2 className="h-8 w-8 shrink-0 animate-pulse" aria-hidden />
            <span className="hidden h-px w-8 animate-pulse bg-primary sm:block" />
          </div>
          <span className="text-xs font-medium text-primary">Misma cuenta</span>
        </div>

        <div
          className="animate-in fade-in zoom-in-95 flex w-full max-w-[200px] flex-col items-center rounded-2xl border-2 border-teal-500/50 bg-card p-6 shadow-lg duration-700 sm:max-w-[220px]"
          style={{ animationDelay: "120ms" }}
        >
          <Dumbbell className="h-10 w-10 text-teal-600 dark:text-teal-400" aria-hidden />
          <p className="mt-3 text-center font-semibold">Body Matter</p>
          <p className="mt-1 text-center text-xs text-muted-foreground">
            Rutinas y entrenos
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            En producción, define los subdominios en{" "}
            <code className="rounded bg-muted px-1 text-xs">
              NEXT_PUBLIC_EATY_ORIGIN
            </code>{" "}
            y{" "}
            <code className="rounded bg-muted px-1 text-xs">
              NEXT_PUBLIC_BODYMATTER_ORIGIN
            </code>
            .
          </p>
          <Button asChild variant="outline" size="sm">
            <a href={eaty} rel="noopener noreferrer">
              Ir a Eaty
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>

      <Button asChild variant="ghost" size="sm">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
