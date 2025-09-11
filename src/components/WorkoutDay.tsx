import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Calendar, Dumbbell, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExerciseCard } from "./ExerciseCard";
import { WorkoutDay as WorkoutDayType } from "./WorkoutData";

interface WorkoutDayProps {
  day: WorkoutDayType;
  onBack: () => void;
}

interface ExerciseImages {
  [key: string]: string;
}

export function WorkoutDay({ day, onBack }: WorkoutDayProps) {
  const [exerciseImages, setExerciseImages] = useState<ExerciseImages>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar imágenes para cada ejercicio (usar URLs específicas si están disponibles, sino usar Unsplash)
    const loadImages = async () => {
      setLoading(true);
      const imageMap: ExerciseImages = {};
      
      day.exercises.forEach((exercise) => {
        // Si el ejercicio tiene una URL específica, usarla
        if (exercise.imageUrl) {
          imageMap[exercise.id] = exercise.imageUrl;
        } else {
          // URLs de Unsplash para diferentes tipos de ejercicios (fallback)
          if (exercise.searchQuery.includes("treadmill") || exercise.searchQuery.includes("walking") || exercise.searchQuery.includes("incline")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1669806954505-936e77929af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhZG1pbGwlMjBjYXJkaW8lMjBneW18ZW58MXx8fHwxNzU3MTA3NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("squat") || exercise.searchQuery.includes("smith")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3F1YXQlMjBleGVyY2lzZXxlbnwxfHx8fDE3NTcxMDc2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("chest") || exercise.searchQuery.includes("press") || exercise.searchQuery.includes("incline")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1710746904729-f3ad9f682bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzdCUyMHByZXNzJTIwbWFjaGluZSUyMGd5bXxlbnwxfHx8fDE3NTcxMDc2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("deadlift") || exercise.searchQuery.includes("romanian")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaXNlJTIwZ3ltfGVufDF8fHx8MTc1NzEwNzY5NXww&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("plank")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1720788073779-04a9e709935c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuayUyMGV4ZXJjaXNlJTIwZml0bmVzc3xlbnwxfHx8fDE3NTcxMDc2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("pulldown") || exercise.searchQuery.includes("lat")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1710746904729-f3ad9f682bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXQlMjBwdWxsZG93biUyMGd5bSUyMGV4ZXJjaXNlfGVufDF8fHx8MTc1NzEwNzcwMHww&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("calf") || exercise.searchQuery.includes("raises")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3F1YXQlMjBleGVyY2lzZXxlbnwxfHx8fDE3NTcxMDc2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("row") || exercise.searchQuery.includes("seated")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1710746904729-f3ad9f682bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzdCUyMHByZXNzJTIwbWFjaGluZSUyMGd5bXxlbnwxfHx8fDE3NTcxMDc2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("bicep") || exercise.searchQuery.includes("curl")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaXNlJTIwZ3ltfGVufDF8fHx8MTc1NzEwNzY5NXww&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("elliptical")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1669806954505-936e77929af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhZG1pbGwlMjBjYXJkaW8lMjBneW18ZW58MXx8fHwxNzU3MTA3NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("lunges") || exercise.searchQuery.includes("walking")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3F1YXQlMjBleGVyY2lzZXxlbnwxfHx8fDE3NTcxMDc2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("bike") || exercise.searchQuery.includes("stationary")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1669806954505-936e77929af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhZG1pbGwlMjBjYXJkaW8lMjBneW18ZW58MXx8fHwxNzU3MTA3NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("hip thrust")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1658211342695-9fb9c8611aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjB0aHJ1c3QlMjBleGVyY2lzZSUyMGd5bXxlbnwxfHx8fDE3NTc1MjQ5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("sumo squat")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1738322795217-cc5859fa5610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1vJTIwc3F1YXQlMjBkdW1iYmVsbCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc1NzUyNDkwOHww&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("dumbbell row one")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1693707963745-297f4e5dd2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW1iYmVsbCUyMHJvdyUyMG9uZSUyMGFybSUyMGV4ZXJjaXNlfGVufDF8fHx8MTc1NzUyNDkxMXww&ixlib=rb-4.1.0&q=80&w=1080";
          } else if (exercise.searchQuery.includes("seated shoulder press")) {
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1637227929217-3b62679e6756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMHByZXNzJTIwc2VhdGVkJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzU3NTI0OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080";
          } else {
            // Imagen por defecto para ejercicios generales
            imageMap[exercise.id] = "https://images.unsplash.com/photo-1710746904729-f3ad9f682bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzdCUyMHByZXNzJTIwbWFjaGluZSUyMGd5bXxlbnwxfHx8fDE3NTcxMDc2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
          }
        }
      });
      
      setExerciseImages(imageMap);
      setLoading(false);
    };

    loadImages();
  }, [day]);

  const estimatedTime = day.exercises.reduce((total, exercise) => {
    if (exercise.duration) {
      const minutes = parseInt(exercise.duration.match(/\d+/)?.[0] || "0");
      return total + minutes;
    }
    // Estimamos 2-3 minutos por serie para ejercicios sin duración especificada
    const sets = parseInt(exercise.sets);
    return total + (sets * 2.5);
  }, 0);

  if (loading) {
    return (
      <div className="min-h-screen p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pt-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="shrink-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
        </div>

        {/* Day Info with Cover Image */}
        <div className="meta-card-strong rounded-xl overflow-hidden mb-6 primary-shadow">
          <div className="flex flex-col md:flex-row">
            {/* Imagen de portada */}
            <div className="relative h-48 md:h-40 md:w-80 flex-shrink-0">
              <ImageWithFallback
                src={day.coverImageUrl || ""}
                alt={`${day.title} - ${day.description}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent md:bg-gradient-to-t md:from-black/60 md:via-black/20 md:to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 bg-primary/90 text-white px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{day.title}</span>
                </div>
              </div>
            </div>
            
            {/* Información del día */}
            <div className="p-6 md:p-8 flex-1">
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {day.description}
                </h1>
                <p className="text-muted-foreground">
                  Plan completo de entrenamiento focado en {day.description.toLowerCase()}
                </p>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 meta-card px-4 py-2 rounded-lg">
                  <Dumbbell className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <div className="text-lg font-bold">{day.exercises.length}</div>
                    <div className="text-xs text-muted-foreground">ejercicios</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 meta-card px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <div className="text-lg font-bold">~{Math.round(estimatedTime)}</div>
                    <div className="text-xs text-muted-foreground">minutos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-4">
          <div className="meta-card rounded-xl p-4 mb-4">
            <h2 className="text-xl font-semibold text-primary">Ejercicios</h2>
          </div>
          {day.exercises.map((exercise, index) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              exerciseNumber={index + 1}
              imageUrl={exerciseImages[exercise.id] || ""}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 meta-card rounded-xl p-6 text-center primary-shadow">
          <p className="text-sm text-muted-foreground">
            💪 ¡Buen entrenamiento! Recuerda mantener una buena forma y hidratarte
          </p>
        </div>
      </div>
    </div>
  );
}