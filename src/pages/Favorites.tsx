
import { useState, useEffect } from "react";
import { Heart, Trash2, PlayCircle, Video, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favoriteActivities, setFavoriteActivities] = useState<any[]>([]);
  const [favoriteVideos, setFavoriteVideos] = useState<any[]>([]);
  const [favoriteTips, setFavoriteTips] = useState<any[]>([]);

  // Mock data - in a real app, this would come from localStorage or a backend
  useEffect(() => {
    // Simulate loading favorites from storage
    setFavoriteActivities([
      {
        id: 1,
        title: "Peek-a-boo Musical",
        type: "activity",
        ageGroup: "0-6m",
        icon: "🎵"
      },
      {
        id: 3,
        title: "Caixa Sensorial",
        type: "activity",
        ageGroup: "6-12m",
        icon: "📦"
      }
    ]);

    setFavoriteVideos([
      {
        id: 1,
        title: "Massagem Relaxante para Bebês",
        type: "video",
        duration: "8:32",
        thumbnail: "/placeholder.svg"
      }
    ]);

    setFavoriteTips([
      {
        id: 2,
        title: "Sinais de Sono do Bebê",
        type: "tip",
        category: "sono",
        icon: "😴"
      }
    ]);
  }, []);

  const removeFavorite = (id: number, type: string) => {
    switch (type) {
      case 'activity':
        setFavoriteActivities(prev => prev.filter(item => item.id !== id));
        break;
      case 'video':
        setFavoriteVideos(prev => prev.filter(item => item.id !== id));
        break;
      case 'tip':
        setFavoriteTips(prev => prev.filter(item => item.id !== id));
        break;
    }
  };

  const totalFavorites = favoriteActivities.length + favoriteVideos.length + favoriteTips.length;

  if (totalFavorites === 0) {
    return (
      <div className="min-h-screen p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Seus Favoritos ❤️
            </h1>
          </div>
          
          <div className="text-center py-16">
            <Heart className="h-24 w-24 mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Nenhum favorito ainda
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Explore nossos conteúdos e salve seus favoritos clicando no ícone de coração.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/activities">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Ver Brincadeiras
                </Button>
              </Link>
              <Link to="/videos">
                <Button variant="outline">
                  <Video className="h-5 w-5 mr-2" />
                  Ver Vídeos
                </Button>
              </Link>
              <Link to="/tips">
                <Button variant="outline">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Ver Dicas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Seus Favoritos ❤️
          </h1>
          <p className="text-xl text-gray-600">
            {totalFavorites} item{totalFavorites > 1 ? 's' : ''} salvo{totalFavorites > 1 ? 's' : ''}
          </p>
        </div>

        {/* Favorite Activities */}
        {favoriteActivities.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <PlayCircle className="h-6 w-6 text-blue-500" />
              Brincadeiras Favoritas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteActivities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{activity.icon}</span>
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
                        onClick={() => removeFavorite(activity.id, 'activity')}
                        className="hover:bg-red-100 text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link to="/activities">
                      <Button variant="outline" className="w-full">
                        Ver Detalhes
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Favorite Videos */}
        {favoriteVideos.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Video className="h-6 w-6 text-green-500" />
              Vídeos Favoritos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteVideos.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg flex-1">{video.title}</CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFavorite(video.id, 'video')}
                        className="hover:bg-red-100 text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link to="/videos">
                      <Button variant="outline" className="w-full">
                        Assistir Vídeo
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Favorite Tips */}
        {favoriteTips.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              Dicas Favoritas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favoriteTips.map((tip) => (
                <Card key={tip.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <span className="text-2xl">{tip.icon}</span>
                        <div>
                          <CardTitle className="text-lg">{tip.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {tip.category}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFavorite(tip.id, 'tip')}
                        className="hover:bg-red-100 text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link to="/tips">
                      <Button variant="outline" className="w-full">
                        Ler Dica
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
