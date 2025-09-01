import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MessageCircle, Heart, Reply, Plus, Search, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import headerImage from "@/assets/herstory-header.jpg";

const EllaDice = () => {
  const { toast } = useToast();

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Mi experiencia en el ámbito laboral",
      content: "Quiero compartir mi historia sobre cómo superé la discriminación en mi trabajo...",
      replies: 12,
      likes: 28,
      category: "Trabajo",
      timeAgo: "2 horas"
    },
    {
      id: 2,
      title: "Recursos para mujeres emprendedoras",
      content: "He recopilado una lista de organizaciones que apoyan a mujeres empresarias...",
      replies: 8,
      likes: 35,
      category: "Emprendimiento",
      timeAgo: "5 horas"
    },
    {
      id: 3,
      title: "Apoyo emocional tras una ruptura difícil",
      content: "Busco consejos y apoyo de la comunidad. Pasé por una situación muy complicada...",
      replies: 24,
      likes: 45,
      category: "Bienestar",
      timeAgo: "1 día"
    }
  ]);

  const [newPost, setNewPost] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", "Trabajo", "Emprendimiento", "Bienestar", "Familia", "Educación"];

  // Crear nuevo post
  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    const newPostObj = {
      id: posts.length + 1,
      title: newPostTitle,
      content: newPost,
      replies: 0,
      likes: 0,
      category: activeCategory === "Todos" ? "General" : activeCategory,
      timeAgo: "Justo ahora"
    };
    setPosts([newPostObj, ...posts]);
    toast({
      title: "¡Post publicado!",
      description: "Tu mensaje ha sido compartido de forma anónima.",
    });
    setNewPost("");
    setNewPostTitle("");
  };

  // Like a un post
  const handleLike = (id: number) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  // Responder (solo aumenta el contador)
  const handleReply = (id: number) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, replies: post.replies + 1 } : post
    ));
  };

  // Filtrar por categoría y búsqueda
  const filteredPosts = posts.filter(post =>
    (activeCategory === "Todos" || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={headerImage} 
          alt="HerStory Header" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Ella Dice</h1>
            <p className="text-lg italic">Foro anónimo de nuestra comunidad</p>
          </div>
        </div>
      </div>

      <Navbar />

      <div className="container py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center space-x-4 p-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Miembros activos</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center space-x-4 p-6">
              <div className="p-3 bg-secondary/10 rounded-full">
                <MessageCircle className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{posts.length}</p>
                <p className="text-sm text-muted-foreground">Conversaciones</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center space-x-4 p-6">
              <div className="p-3 bg-accent/10 rounded-full">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {posts.reduce((sum, p) => sum + p.likes, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Apoyos compartidos</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Nuevo Post */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Nuevo Post (Anónimo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewPost} className="space-y-4">
                  <Input
                    placeholder="Título de tu post"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Comparte tu experiencia, pregunta o reflexión..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    required
                    className="min-h-24"
                  />
                  <Button type="submit" className="w-full">
                    Publicar anónimamente
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Categorías */}
            <Card>
              <CardHeader>
                <CardTitle>Categorías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "default" : "ghost"}
                      className="w-full justify-start"
                      size="sm"
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main */}
          <div className="lg:col-span-3 space-y-6">
            {/* Buscar */}
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar en el foro..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback className="bg-primary/10 text-primary">
                              A
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">Anónimo</p>
                            <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{post.content}</p>
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground"
                          onClick={() => handleLike(post.id)}
                        >
                          <Heart className="h-4 w-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground"
                          onClick={() => handleReply(post.id)}
                        >
                          <Reply className="h-4 w-4 mr-1" />
                          {post.replies} respuestas
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-center text-muted-foreground">No se encontraron posts.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EllaDice;
