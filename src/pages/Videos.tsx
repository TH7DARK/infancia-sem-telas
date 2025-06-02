
import { useState } from "react";
import { ExternalLink, Clock, Heart, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const videos = [
    {
      id: 1,
      title: "Massagem Relaxante para Bebês",
      description: "Aprenda técnicas de massagem que acalmam e fortalecem o vínculo com seu bebê.",
      thumbnail: "/images.png",
      duration: "02:10",
      category: "cuidados",
      youtubeId: "zyUxQHmKV9M",
      ageGroup: "0-12m""
    },
    {
      id: 2,
      title: "Massagem Relaxante para Bebês",
      description: "Aprenda técnicas de massagem que acalmam e fortalecem o vínculo com seu bebê.",
      thumbnail: "/placeholder.svg",
      duration: "04:59",
      category: "cuidados",
      youtubeId: "sat7DKCo-bE",
      ageGroup: "0-12m"
    },
    {
      id: 3,
      title: "Brincadeiras Sensoriais - 0 a 6 meses",
      description: "Estimule os sentidos do seu bebê com atividades seguras e divertidas.",
      thumbnail: "/placeholder.svg",
      duration: "20:39",
      category: "brincadeiras",
      youtubeId: "S7wTQX0GuMk",
      ageGroup: "0-6m"
    },
    {
      id: 4,
      title: "Introdução à Música para Bebês",
      description: "Como usar música para desenvolver a linguagem e coordenação.",
      thumbnail: "/placeholder.svg",
      duration: "08:31",
      category: "desenvolvimento",
      youtubeId: "1I2GYUsMq2Y",
      ageGroup: "6-18m"
    },
    {
      id: 5,
      title: "Rotina de Sono Saudável",
      description: "Estabeleça uma rotina de sono que funciona para toda a família.",
      thumbnail: "/placeholder.svg",
      duration: "08:48",
      category: "sono",
      youtubeId: "ONBNtsQcWBI",
      ageGroup: "0-24m"
    },
    {
      id: 6,
      title: "Alimentação Complementar",
      description: "Guia completo para introduzir alimentos sólidos de forma segura.",
      thumbnail: "/placeholder.svg",
      duration: "05:26",
      category: "alimentacao",
      youtubeId: "1TeGyXsZA3U",
      ageGroup: "6-12m"
    },
    {
      id: 7,
      title: "Atividades Motoras para Toddlers",
      description: "Exercícios divertidos para desenvolver coordenação e força.",
      thumbnail: "/placeholder.svg",
      duration: "08:04",
      category: "brincadeiras",
      youtubeId: "SaoTKs4DRIo",
      ageGroup: "12-24m"
    }
  ];

  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "brincadeiras", label: "Brincadeiras" },
    { value: "cuidados", label: "Cuidados" },
    { value: "desenvolvimento", label: "Desenvolvimento" },
    { value: "sono", label: "Sono" },
    { value: "alimentacao", label: "Alimentação" }
  ];

  const filteredVideos = selectedCategory === "all" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const openYoutube = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      brincadeiras: "bg-blue-100 text-blue-800",
      cuidados: "bg-green-100 text-green-800",
      desenvolvimento: "bg-purple-100 text-purple-800",
      sono: "bg-indigo-100 text-indigo-800",
      alimentacao: "bg-orange-100 text-orange-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Vídeos Educativos 📺
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda com especialistas através de vídeos práticos e informativos.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filtrar por categoria:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2">
                  <Badge className={getCategoryColor(video.category)}>
                    {video.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                    <Badge variant="outline" className="mt-2">
                      {video.ageGroup}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(video.id)}
                    className="hover:bg-pink-100 ml-2"
                  >
                    <Heart 
                      className={`h-5 w-5 ${
                        favorites.includes(video.id) 
                          ? "fill-pink-500 text-pink-500" 
                          : "text-gray-400"
                      }`}
                    />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {video.description}
                </p>
                
                <Button 
                  onClick={() => openYoutube(video.youtubeId)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Assistir no YouTube
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              Nenhum vídeo encontrado para esta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;
