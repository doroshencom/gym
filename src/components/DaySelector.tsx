import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dumbbell, Calendar, ChevronRight, Clock, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { workoutData, WorkoutDay } from "./WorkoutData";

interface DaySelectorProps {
  onDaySelect: (day: WorkoutDay) => void;
}

export function DaySelector({ onDaySelect }: DaySelectorProps) {
  const getEstimatedTime = (day: WorkoutDay) => {
    const time = day.exercises.reduce((total, exercise) => {
      if (exercise.duration) {
        const minutes = parseInt(exercise.duration.match(/\d+/)?.[0] || "0");
        return total + minutes;
      }
      const sets = parseInt(exercise.sets);
      return total + (sets * 2.5);
    }, 0);
    return Math.round(time);
  };

  const hasPartnerOptions = (day: WorkoutDay) => {
    return day.exercises.some(exercise => 
      exercise.notes && exercise.notes.includes("pareja")
    );
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto pt-8">


        {/* Day Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {workoutData.map((day) => (
            <Card 
              key={day.id} 
              className="group meta-card hover:primary-shadow-strong cursor-pointer transition-all duration-300 overflow-hidden"
              onClick={() => onDaySelect(day)}
            >
              {/* Imagen de portada */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={day.coverImageUrl || ""}
                  alt={`${day.title} - ${day.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-white border-0 text-base px-4 py-2 font-medium">
                    {day.title}
                  </Badge>
                </div>
                <ChevronRight className="absolute bottom-4 right-4 w-8 h-8 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {day.description}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  Plan completo de entrenamiento focado en {day.description.toLowerCase()}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 meta-card px-3 py-2 rounded-lg">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{day.exercises.length} ejercicios</span>
                  </div>
                  <div className="flex items-center gap-2 meta-card px-3 py-2 rounded-lg">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">~{getEstimatedTime(day)} min</span>
                  </div>
                </div>

                {/* Exercise Preview */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Incluye:</p>
                  <div className="text-sm text-muted-foreground">
                    {day.exercises.slice(0, 3).map((exercise, index) => (
                      <div key={exercise.id} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>
                          {exercise.name.length > 35 
                            ? exercise.name.substring(0, 35) + '...' 
                            : exercise.name
                          }
                        </span>
                      </div>
                    ))}
                    {day.exercises.length > 3 && (
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                        <span className="text-xs">+{day.exercises.length - 3} ejercicios más</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="meta-card rounded-2xl p-6 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">💪</span>
              <h3 className="text-xl font-bold text-foreground">¡Comienza tu transformación!</h3>
              <span className="text-2xl">💕</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}