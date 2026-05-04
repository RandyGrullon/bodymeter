"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { AuthScreen } from "@/components/auth/auth-screen";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarDays,
  Dumbbell,
  History,
  Link2,
  Loader2,
  Play,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Hola</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Accesos rápidos a tus entrenos y a Eaty.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Dumbbell className="h-5 w-5 text-primary" aria-hidden />
              Rutinas
            </CardTitle>
            <CardDescription>Crear, editar o generar con IA</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button asChild size="sm">
              <Link href="/workouts">Ver rutinas</Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link href="/workouts/ai">
                <Sparkles className="mr-1 h-4 w-4" />
                IA
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Play className="h-5 w-5 text-primary" aria-hidden />
              Entreno libre
            </CardTitle>
            <CardDescription>Nuevo entreno sin plantilla</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm">
              <Link href="/session/new">Empezar</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <History className="h-5 w-5" aria-hidden />
              Historial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm" variant="outline">
              <Link href="/history">Abrir</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <CalendarDays className="h-5 w-5" aria-hidden />
              Calendario
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm" variant="outline">
              <Link href="/calendar">Abrir</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Link2 className="h-5 w-5" aria-hidden />
            Eaty
          </CardTitle>
          <CardDescription>Misma cuenta Firebase</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/integracion">Cómo se conectan</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
