
import { Heart, PlayCircle, Video, Lightbulb, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const dailyTips = [
    {
      title: "Hora do Banho Divertida",
      description: "Transforme o banho em uma brincadeira com brinquedos flutuantes e músicas suaves.",
      icon: "🛁",
      time: "5-10 min"
    },
    {
      title: "Leitura em Família",
      description: "Reserve 15 minutos para ler uma história antes de dormir.",
      icon: "📚",
      time: "15 min"
    },
    {
      title: "Massagem Relaxante",
      description: "Uma massagem suave ajuda o bebê a relaxar e fortalece o vínculo.",
      icon: "👶",
      time: "10 min"
    }
  ];

  const quickStats = [
    { number: "100+", label: "Brincadeiras", icon: PlayCircle },
    { number: "50+", label: "Vídeos", icon: Video },
    { number: "20+", label: "Dicas", icon: Lightbulb },
  ];

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Bem-vindos, Papais! 👶
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seu companheiro essencial para os primeiros anos de vida do seu bebê. 
            Descubra brincadeiras, dicas e atividades que fortalecem o vínculo familiar sem depender de telas.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <Icon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Daily Tips */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <Star className="h-8 w-8 text-yellow-500" />
              Dicas do Dia
            </h2>
            <Link to="/tips">
              <Button variant="outline" className="hover:bg-blue-50">
                Ver Todas as Dicas
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailyTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="text-2xl">{tip.icon}</span>
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{tip.description}</p>
                  <div className="flex items-center gap-1 text-sm text-blue-600">
                    <Clock className="h-4 w-4" />
                    {tip.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link to="/activities" className="group">
            <Card className="hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-gradient-to-br from-blue-100 to-blue-200">
              <CardContent className="flex flex-col items-center text-center p-8">
                <PlayCircle className="h-16 w-16 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-blue-800 mb-2">Brincadeiras</h3>
                <p className="text-blue-600">Atividades por idade</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/videos" className="group">
            <Card className="hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-gradient-to-br from-green-100 to-green-200">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Video className="h-16 w-16 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-green-800 mb-2">Vídeos</h3>
                <p className="text-green-600">Tutoriais práticos</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/tips" className="group">
            <Card className="hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-gradient-to-br from-yellow-100 to-yellow-200">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Lightbulb className="h-16 w-16 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-yellow-800 mb-2">Dicas</h3>
                <p className="text-yellow-600">Conselhos especializados</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/favorites" className="group">
            <Card className="hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 bg-gradient-to-br from-pink-100 to-pink-200">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Heart className="h-16 w-16 text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-pink-800 mb-2">Favoritos</h3>
                <p className="text-pink-600">Seus salvos</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
