export interface Exercise {
  id: string;
  name: string;
  sets: string;
  reps?: string;
  rpe?: string;
  duration?: string;
  notes?: string;
  searchQuery: string; // Para buscar imagen en Unsplash
  imageUrl?: string; // URL específica de imagen
  partnerImageUrl?: string; // URL específica para ejercicio alternativo de pareja
}

export interface WorkoutDay {
  id: number;
  title: string;
  description: string;
  exercises: Exercise[];
  coverImageUrl?: string; // URL de imagen de portada para el día
}

export const workoutData: WorkoutDay[] = [
  {
    id: 1,
    title: "Día 1",
    description: "Tren Inferior + Pectoral / Glúteos",
    coverImageUrl: "https://hips.hearstapps.com/hmg-prod/images/prensa-1560710107.jpg",
    exercises: [
      {
        id: "1-1",
        name: "Calentamiento: Caminata rápida en cinta o elíptica",
        sets: "1",
        duration: "10 min",
        searchQuery: "treadmill walking exercise",
        notes: "Calentamiento",
        imageUrl: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
      },
      {
        id: "1-2",
        name: "Prensa de piernas (diagonal)",
        sets: "4",
        reps: "10",
        searchQuery: "leg press machine exercise",
        imageUrl: "https://quierocuidarme.dkv.es/sites/default/files/2025-03/prensa-pierna-2.jpg"
      },
      {
        id: "1-3",
        name: "Press de pecho en máquina o mancuernas",
        sets: "4",
        reps: "8-10",
        searchQuery: "chest press machine exercise",
        notes: "Opcional para pareja: Hip Thrust 4x12-15",
        imageUrl: "https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg",
        partnerImageUrl: "https://images.ctfassets.net/0k812o62ndtw/7GJbPRKGMwuMZlNJSrzucg/2ce553d1ee287f1e8064f6e53c25e3cf/Shutterstock_2212080951.jpg?w=1024&q=85"
      },
      {
        id: "1-4",
        name: "Peso muerto rumano con mancuernas",
        sets: "3",
        reps: "10",
        searchQuery: "romanian deadlift dumbbells",
        imageUrl: "https://eresfitness.com/wp-content/uploads/22131105-Barbell-Romanian-Deadlift-female_Hips-FIX_max.webp"
      },
      {
        id: "1-5",
        name: "Elevación de talones en máquina de gemelos",
        sets: "3",
        reps: "15",
        searchQuery: "standing calf raises exercise",
        imageUrl: "https://mundoentrenamiento.com/wp-content/uploads/2025/05/gemelos-en-maquina.png"
      },
      {
        id: "1-6",
        name: "Plancha abdominal",
        sets: "3",
        duration: "30 seg",
        searchQuery: "plank exercise",
        imageUrl: "https://fotografias.larazon.es/clipping/cmsimages01/2022/10/20/FEA3BE21-7842-4D00-AF9D-F6DD662265F2/98.jpg?crop=672,378,x3,y0&width=1900&height=1069&optimize=low&format=webply"
      }
    ]
  },
  {
    id: 2,
    title: "Día 2",
    description: "Tren Superior (Tirón + Brazos / Tirón + Tonificación)",
    coverImageUrl: "https://otoentrenadorpersonal.com/wp-content/uploads/2017/06/errores-de-mujeres-en-el-gym.jpg",
    exercises: [
      {
        id: "2-1",
        name: "Calentamiento: Elíptica",
        sets: "1",
        duration: "8 min",
        searchQuery: "elliptical machine exercise",
        notes: "Calentamiento",
        imageUrl: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
      },
      {
        id: "2-2",
        name: "Jalón al pecho",
        sets: "4",
        reps: "8-10",
        searchQuery: "lat pulldown exercise",
        imageUrl: "https://image.tuasaude.com/media/article/ll/ae/puxada-frontal_63648.jpg?width=686&height=487"
      },
      {
        id: "2-3",
        name: "Remo en máquina o con mancuerna",
        sets: "3",
        reps: "12",
        searchQuery: "seated row machine exercise",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriNjT84Vmv0-AShPzqLlH3ABzbV2YiDKgBA&s"
      },
      {
        id: "2-4",
        name: "Face pulls con cuerda",
        sets: "3",
        reps: "15",
        searchQuery: "face pulls cable exercise",
        imageUrl: "https://flexfitnessapp.com/_next/image/?url=https%3A%2F%2Fflex-web-media-prod.storage.googleapis.com%2F2024%2F12%2Fface-pull-cable-exercise-cover.webp&w=1024&q=75"
      },
      {
        id: "2-5",
        name: "Curl bíceps",
        sets: "3",
        reps: "10-12",
        searchQuery: "bicep curl dumbbells exercise",
        notes: "Opcional para pareja: Prensa horizontal (en máquina) 3x12",
        imageUrl: "https://lifefuel.es/wp-content/uploads/2024/06/Curl-de-biceps-barra-vs-Mancuerna.jpg",
        partnerImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDviqM152EVOYegavJqpSa3cZuSq-JYE8JpQ&s"
      },
      {
        id: "2-6",
        name: "Plancha lateral",
        sets: "2",
        duration: "30 seg por lado",
        searchQuery: "side plank exercise",
        imageUrl: "https://www.hola.com/horizon/original_aspect_ratio/0e7d56e1b765-elevacion-cadera-z.jpg?im=Resize=(960),type=downsize"
      }
    ]
  },
  {
    id: 3,
    title: "Día 3",
    description: "Full Body + Core",
    coverImageUrl: "https://www.cambiatufisico.com/wp-content/uploads/rutinas-full-body2.jpg",
    exercises: [
      {
        id: "3-1",
        name: "Cardio: Caminata en pendiente o bici",
        sets: "1",
        duration: "15 min",
        searchQuery: "incline walking treadmill",
        notes: "Cardio",
        imageUrl: "https://behumax.com/wp-content/uploads/2025/05/rutina-de-bicicleta-estatica-para-quemar-grasa.jpg"
      },
      {
        id: "3-2",
        name: "Zancadas caminando o step-ups",
        sets: "3",
        reps: "10 por pierna",
        searchQuery: "walking lunges exercise",
        imageUrl: "https://eresfitness.com/wp-content/uploads/14601105-Walking-Lunge-Male_Hips_max.webp"
      },
      {
        id: "3-3",
        name: "Peso muerto rumano",
        sets: "3",
        reps: "10",
        searchQuery: "romanian deadlift dumbbells",
        imageUrl: "https://www.fitactiva.com/wp-content/uploads/2024/03/peso-muerto-rumano-mancuernas.png"
      },
      {
        id: "3-4",
        name: "Curl de cuádriceps",
        sets: "3",
        reps: "12",
        searchQuery: "leg extension exercise",
        imageUrl: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/08/17/16922532683187.jpg"
      },
      {
        id: "3-5",
        name: "Curl femoral",
        sets: "3",
        reps: "12",
        searchQuery: "leg curl exercise",
        imageUrl: "https://blogscdn.thehut.net/app/uploads/sites/450/2021/12/shutterstock_1471492208-1-ftt-min_1639666672-700x392_1640697637.jpg"
      },
      {
        id: "3-6",
        name: "Plancha con toque de hombros",
        sets: "3",
        reps: "20",
        searchQuery: "plank shoulder taps exercise",
        imageUrl: "https://www.sportlife.es/uploads/static/sportlife/upload/images/paragrapharticle/9775/imagenes/ej-tocar-hombro.jpg"
      },
      {
        id: "3-7",
        name: "Crunch abdominal",
        sets: "3",
        reps: "20",
        searchQuery: "crunch abdominal exercise",
        imageUrl: "https://www.panattasport.com/wp-content/uploads/2023/03/esercizio-89-jpg-webp.webp"
      }
    ]
  },
  {
    id: 4,
    title: "Día 4",
    description: "Tren Superior (Empuje) + Tren Inferior (Ella)",
    coverImageUrl: "https://wupfitnesscenter.es/wp-content/uploads/2024/02/Beneficios-de-entrenar-con-tu-pareja-en-el-gimnasio-1030x539.jpg",
    exercises: [
      {
        id: "4-1",
        name: "Cardio: Bicicleta o remo suave",
        sets: "1",
        duration: "10 min",
        searchQuery: "stationary bike exercise",
        notes: "Cardio",
        imageUrl: "https://behumax.com/wp-content/uploads/2025/05/rutina-de-bicicleta-estatica-para-quemar-grasa.jpg"
      },
      {
        id: "4-2",
        name: "Press militar",
        sets: "4",
        reps: "8-10",
        searchQuery: "seated shoulder press exercise",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1pkRhwYgGYfPlmMcBHhL2dFKnnxGE3Oftg&s"
      },
      {
        id: "4-3",
        name: "Elevaciones laterales",
        sets: "3",
        reps: "12-15",
        searchQuery: "lateral raises dumbbells",
        imageUrl: "https://hips.hearstapps.com/hmg-prod/images/lateral-raise-66ab78abd80e9.jpg"
      },
      {
        id: "4-4",
        name: "Aperturas con mancuernas",
        sets: "3",
        reps: "12",
        searchQuery: "dumbbell flyes exercise",
        notes: "Opcional para pareja: Hip Thrust 4x12",
        imageUrl: "https://mundoentrenamiento.com/wp-content/uploads/2021/08/ejecucion-de-las-aperturas-con-mancuernas-scaled.jpeg",
        partnerImageUrl: "https://images.ctfassets.net/0k812o62ndtw/7GJbPRKGMwuMZlNJSrzucg/2ce553d1ee287f1e8064f6e53c25e3cf/Shutterstock_2212080951.jpg?w=1024&q=85"
      },
      {
        id: "4-5",
        name: "Extensión tríceps con cuerda",
        sets: "3",
        reps: "12",
        searchQuery: "tricep pushdown cable exercise",
        notes: "Opcional para pareja: Abductores en máquina 3x15",
        imageUrl: "https://www.cambiatufisico.com/wp-content/uploads/2011/02/Jalones-con-cuerda.jpg",
        partnerImageUrl: "https://fitgeneration.es/wp-content/uploads/2023/11/Maquinas-de-abductor-5-jpg.webp"
      },
      {
        id: "4-6",
        name: "Movilidad general",
        sets: "1",
        duration: "10 min",
        searchQuery: "stretching mobility exercise",
        notes: "Movilidad",
        imageUrl: "https://www.wundertraining.com/wp-content/uploads/2024/10/WT_Ejercicios-movilidad-general-cuerpo_destacada-1.jpg"
      }
    ]
  },
  {
    id: 5,
    title: "Día 5",
    description: "Full Body + Cardio",
    coverImageUrl: "https://www.forumsport.com/es-es/blogs/fitness/wp-content/uploads/sites/6/2023/06/portada-1-1024x576.jpg",
    exercises: [
      {
        id: "5-1",
        name: "Cardio: Caminata en pendiente o elíptica",
        sets: "1",
        duration: "15 min",
        searchQuery: "incline walking treadmill",
        notes: "Cardio",
        imageUrl: "https://www.sportlife.es/uploads/s1/76/35/47/0/article-eliptica-puntos-fuertes-maquinas-gimnasio-5954e72160ef7.jpeg"
      },
      {
        id: "5-2",
        name: "Prensa de piernas",
        sets: "4",
        reps: "10",
        searchQuery: "leg press machine exercise",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2B4lUw7JhAAbxHzIUUWiQQ6F4nCZOrlr8g&s"
      },
      {
        id: "5-3",
        name: "Remo en máquina sentado",
        sets: "3",
        reps: "10",
        searchQuery: "seated row machine exercise",
        imageUrl: "https://www.cambiatufisico.com/wp-content/uploads/remo-maquina1.jpg"
      },
      {
        id: "5-4",
        name: "Press de pecho",
        sets: "3",
        reps: "8-10",
        searchQuery: "chest press machine exercise",
        notes: "Opcional para pareja: Zancadas alternas 3x12 por pierna",
        imageUrl: "https://www.muscularstore.es/blog/wp-content/uploads/2019/05/press-banca.jpg",
        partnerImageUrl: "https://www.hola.com/horizon/original_aspect_ratio/bdde04834de1-combinado-z.jpg"
      },
      {
        id: "5-5",
        name: "Crunch abdominal",
        sets: "3",
        reps: "20",
        searchQuery: "crunch abdominal exercise",
        imageUrl: "https://www.shutterstock.com/image-illustration/abdominal-crunch-machine-3d-illustration-260nw-418630585.jpg"
      },
      {
        id: "5-6",
        name: "Elevaciones de talones",
        sets: "3",
        reps: "15",
        searchQuery: "standing calf raises exercise",
        imageUrl: "https://i.pinimg.com/736x/00/70/f4/0070f42cb05d82dc117c7d47667f5e97.jpg"
      }
    ]
  }
];