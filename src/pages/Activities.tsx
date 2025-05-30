
import { useState } from "react";
import { Clock, Users, Heart, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Activities = () => {
  const [selectedAge, setSelectedAge] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const activities = [
    {
      id: 1,
      title: "Peek-a-boo Musical",
      description: "Brinque de esconde-esconde cantando diferentes melodias a cada aparição.",
      ageGroup: "0-6m",
      duration: "5-10 min",
      participants: "1-2",
      icon: "🎵",
      benefits: ["Desenvolvimento cognitivo", "Vínculo afetivo", "Coordenação"]
    },
    {
      id: 2,
      title: "Massagem com Óleos",
      description: "Massagem suave com movimentos circulares usando óleo de bebê morno.",
      ageGroup: "0-6m",
      duration: "10-15 min",
      participants: "1-2",
      icon: "👶",
      benefits: ["Relaxamento", "Circulação", "Vínculo"]
    },
    {
      id: 3,
      title: "Caixa Sensorial",
      description: "Explore diferentes texturas com tecidos, esponjas e brinquedos seguros.",
      ageGroup: "6-12m",
      duration: "15-20 min",
      participants: "1-3",
      icon: "📦",
      benefits: ["Estimulação sensorial", "Curiosidade", "Motricidade"]
    },
    {
      id: 4,
      title: "Dança do Bebê",
      description: "Segure o bebê e dance suavemente ao som de música calma.",
      ageGroup: "0-12m",
      duration: "10-15 min",
      participants: "1-2",
      icon: "💃",
      benefits: ["Coordenação", "Ritmo", "Alegria"]
    },
    {
      id: 5,
      title: "Caça ao Tesouro Sensorial",
      description: "Esconda objetos seguros pela casa para o bebê encontrar e explorar.",
      ageGroup: "12-18m",
      duration: "20-30 min",
      participants: "2-4",
      icon: "🔍",
      benefits: ["Resolução de problemas", "Motricidade", "Exploração"]
    },
    {
      id: 6,
      title: "Teatro de Sombras",
      description: "Use as mãos para criar sombras divertidas na parede.",
      ageGroup: "18m+",
      duration: "15-25 min",
      participants: "1-4",
      icon: "🎭",
      benefits: ["Imaginação", "Criatividade", "Linguagem"]
    }
  ];

  const ageGroups = [
    { value: "all", label: "Todas as Idades" },
    { value: "0-6m", label: "0-6 meses" },
    { value: "6-12m", label: "6-12 meses" },
    { value: "12-18m", label: "12-18 meses" },
    { value: "18m+", label: "18+ meses" }
  ];

  const filteredActivities = selectedAge === "all" 
    ? activities 
    : activities.filter(activity => activity.ageGroup === selectedAge);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Brincadeiras e Atividades 🎯
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atividades cuidadosamente selecionadas para cada fase do desenvolvimento do seu bebê.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filtrar por idade:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {ageGroups.map((group) => (
              <Button
                key={group.value}
                variant={selectedAge === group.value ? "default" : "outline"}
                onClick={() => setSelectedAge(group.value)}
                className="mb-2"
              >
                {group.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{activity.icon}</span>
                    <div>
                      <CardTitle className="text-lg">{activity.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {activity.ageGroup}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(activity.id)}
                    className="hover:bg-pink-100"
                  >
                    <Heart 
                      className={`h-5 w-5 ${
                        favorites.includes(activity.id) 
                          ? "fill-pink-500 text-pink-500" 
                          : "text-gray-400"
                      }`}
                    />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {activity.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {activity.participants}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Benefícios:</h4>
                  <div className="flex flex-wrap gap-1">
                    {activity.benefits.map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              Nenhuma atividade encontrada para esta faixa etária.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activities;
