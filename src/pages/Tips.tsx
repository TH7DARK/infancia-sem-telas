
import { useState } from "react";
import { Heart, Filter, Clock, User, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Tips = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const tips = [
    {
      id: 1,
      title: "O Poder do Contato Pele a Pele",
      content: "O contato pele a pele logo após o nascimento e durante os primeiros meses é fundamental para regular a temperatura corporal, fortalecer o vínculo e estimular a produção de leite materno.",
      category: "vinculo",
      readTime: "3 min",
      expert: "Dr. Ana Silva - Pediatra",
      ageGroup: "0-6m",
      icon: "🤱"
    },
    {
      id: 2,
      title: "Sinais de Sono do Bebê",
      content: "Observe sinais como bocejos, esfregar os olhos, ficar irritado ou menos ativo. Colocar o bebê para dormir nos primeiros sinais evita o cansaço excessivo e facilita o adormecer.",
      category: "sono",
      readTime: "4 min",
      expert: "Dra. Márcia Costa - Especialista em Sono",
      ageGroup: "0-12m",
      icon: "😴"
    },
    {
      id: 3,
      title: "Estimulação Visual nos Primeiros Meses",
      content: "Bebês nascem com visão limitada. Use objetos com alto contraste (preto e branco) a 20-25cm do rosto. Mova lentamente para estimular o rastreamento visual.",
      category: "desenvolvimento",
      readTime: "5 min",
      expert: "Dra. Carla Mendes - Neuropsicóloga",
      ageGroup: "0-6m",
      icon: "👁️"
    },
    {
      id: 4,
      title: "Quando Introduzir Alimentos Sólidos",
      content: "A introdução alimentar deve começar aos 6 meses, quando o bebê consegue sentar com apoio, perdeu o reflexo de extrusão da língua e mostra interesse pela comida.",
      category: "alimentacao",
      readTime: "6 min",
      expert: "Dra. Paula Santos - Nutricionista Infantil",
      ageGroup: "6-12m",
      icon: "🥄"
    },
    {
      id: 5,
      title: "Desenvolvimento da Linguagem",
      content: "Converse com seu bebê desde o nascimento. Use entonação variada, descreva suas ações e responda aos sons que ele faz. A leitura diária também é fundamental.",
      category: "desenvolvimento",
      readTime: "7 min",
      expert: "Dra. Sofia Lima - Fonoaudióloga",
      ageGroup: "0-24m",
      icon: "🗣️"
    },
    {
      id: 6,
      title: "Criando Rotinas Flexíveis",
      content: "Estabeleça uma sequência de atividades previsíveis (banho, massagem, alimentação, sono) mas mantenha flexibilidade nos horários, respeitando as necessidades individuais do bebê.",
      category: "rotina",
      readTime: "5 min",
      expert: "Dra. Helena Rodrigues - Psicóloga Infantil",
      ageGroup: "3-18m",
      icon: "⏰"
    },
    {
      id: 7,
      title: "Segurança no Ambiente Doméstico",
      content: "Baby-proof sua casa progressivamente: proteja tomadas, cantos de móveis, gavetas com objetos perigosos e instale travas de segurança conforme o bebê se desenvolve.",
      category: "seguranca",
      readTime: "8 min",
      expert: "Dr. Roberto Silva - Pediatra de Emergência",
      ageGroup: "6-24m",
      icon: "🏠"
    },
    {
      id: 8,
      title: "Cuidando de Você, Mamãe/Papai",
      content: "Seu bem-estar afeta diretamente o bebê. Aceite ajuda, descanse quando possível, mantenha uma alimentação saudável e não hesite em buscar apoio profissional se necessário.",
      category: "autocuidado",
      readTime: "6 min",
      expert: "Dra. Amanda Costa - Psicóloga Perinatal",
      ageGroup: "0-24m",
      icon: "💚"
    }
  ];

  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "vinculo", label: "Vínculo" },
    { value: "sono", label: "Sono" },
    { value: "desenvolvimento", label: "Desenvolvimento" },
    { value: "alimentacao", label: "Alimentação" },
    { value: "rotina", label: "Rotina" },
    { value: "seguranca", label: "Segurança" },
    { value: "autocuidado", label: "Autocuidado" }
  ];

  const filteredTips = selectedCategory === "all" 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      vinculo: "bg-pink-100 text-pink-800",
      sono: "bg-indigo-100 text-indigo-800",
      desenvolvimento: "bg-purple-100 text-purple-800",
      alimentacao: "bg-orange-100 text-orange-800",
      rotina: "bg-blue-100 text-blue-800",
      seguranca: "bg-red-100 text-red-800",
      autocuidado: "bg-green-100 text-green-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Dicas de Especialistas 💡
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conselhos baseados em evidências científicas para apoiar você nesta jornada.
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

        {/* Tips Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTips.map((tip) => (
            <Card key={tip.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-2xl">{tip.icon}</span>
                    <div className="flex-1">
                      <CardTitle className="text-xl leading-tight mb-2">{tip.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge className={getCategoryColor(tip.category)}>
                          {tip.category}
                        </Badge>
                        <Badge variant="outline">
                          {tip.ageGroup}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(tip.id)}
                    className="hover:bg-pink-100"
                  >
                    <Heart 
                      className={`h-5 w-5 ${
                        favorites.includes(tip.id) 
                          ? "fill-pink-500 text-pink-500" 
                          : "text-gray-400"
                      }`}
                    />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {tip.content}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tip.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Lightbulb className="h-4 w-4" />
                      Dica especializada
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mt-2 text-sm text-blue-600">
                  <User className="h-4 w-4" />
                  {tip.expert}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              Nenhuma dica encontrada para esta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tips;
