import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, Timer, Repeat, Target, Info } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Exercise } from "./WorkoutData";

interface ExerciseCardProps {
  exercise: Exercise;
  exerciseNumber: number;
  imageUrl: string;
}

export function ExerciseCard({ exercise, exerciseNumber, imageUrl }: ExerciseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isWarmupOrCardio = exercise.notes === "Calentamiento" || exercise.notes === "Cardio" || exercise.notes === "Cardio suave" || exercise.notes === "Movilidad";
  const hasPartnerOption = exercise.notes && exercise.notes.includes("pareja");

  return (
    <Card className="meta-card overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">
                {exerciseNumber}
              </Badge>
              {isWarmupOrCardio && (
                <Badge variant="outline" className="text-xs">
                  {exercise.notes}
                </Badge>
              )}
              {hasPartnerOption && (
                <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-700 border-pink-200">
                  Opcional 💕
                </Badge>
              )}
            </div>
            <CardTitle className="text-lg leading-tight">
              {exercise.name}
            </CardTitle>
            <CardDescription className="mt-2">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Repeat className="w-4 h-4" />
                  <span>{exercise.sets} series</span>
                </div>
                {exercise.reps && (
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    <span>{exercise.reps} reps</span>
                  </div>
                )}
                {exercise.duration && (
                  <div className="flex items-center gap-1">
                    <Timer className="w-4 h-4" />
                    <span>{exercise.duration}</span>
                  </div>
                )}
                {exercise.rpe && (
                  <Badge variant="outline" className="text-xs">
                    {exercise.rpe}
                  </Badge>
                )}
              </div>
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="shrink-0"
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            {/* Imagen del ejercicio */}
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-lg bg-muted">
                <ImageWithFallback
                  src={imageUrl}
                  alt={exercise.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  Ejercicio principal
                </div>
              </div>
              
              {/* Imagen de ejercicio alternativo para pareja */}
              {hasPartnerOption && exercise.partnerImageUrl && (
                <div className="relative overflow-hidden rounded-lg bg-muted border-2 border-pink-200">
                  <ImageWithFallback
                    src={exercise.partnerImageUrl}
                    alt="Ejercicio alternativo para pareja"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-pink-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Alternativa 💕
                  </div>
                </div>
              )}
            </div>
            
            {/* Detalles del ejercicio */}
            <div className="grid grid-cols-2 gap-4 p-4 meta-card rounded-lg">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Repeat className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Series</span>
                </div>
                <p className="text-lg font-bold">{exercise.sets}</p>
              </div>
              
              {exercise.reps && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Repeticiones</span>
                  </div>
                  <p className="text-lg font-bold">{exercise.reps}</p>
                </div>
              )}
              
              {exercise.duration && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Duración</span>
                  </div>
                  <p className="text-lg font-bold">{exercise.duration}</p>
                </div>
              )}
              
              {exercise.rpe && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Intensidad</span>
                  </div>
                  <p className="text-lg font-bold">{exercise.rpe}</p>
                </div>
              )}
            </div>
            
            {/* Nota para pareja */}
            {hasPartnerOption && (
              <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-pink-600">💕</span>
                  <span className="text-sm font-medium text-pink-800">Opción para pareja</span>
                </div>
                <p className="text-sm text-pink-700">{exercise.notes}</p>
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
}