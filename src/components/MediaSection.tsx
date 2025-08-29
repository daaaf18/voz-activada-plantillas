import { useState, useMemo } from 'react';
import { MediaCard } from './MediaCard';
import { MediaFilters } from './MediaFilters';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for demonstration
const mediaData = [
  {
    id: '1',
    title: 'Liderazgo Femenino en el Siglo XXI',
    description: 'Un diálogo profundo sobre el papel de las mujeres líderes en la transformación social y económica actual.',
    type: 'podcast' as const,
    duration: '45 min',
    author: 'María González',
    thumbnail: '/placeholder.svg',
    topics: ['Liderazgo', 'Empoderamiento', 'Economía'],
    participants: ['María González', 'Ana Rodríguez', 'Carmen López']
  },
  {
    id: '2',
    title: 'Mujeres en STEM: Rompiendo Barreras',
    description: 'Testimonio inspirador de científicas y tecnólogas que están cambiando el mundo desde la innovación.',
    type: 'video' as const,
    duration: '32 min',
    author: 'Dr. Laura Martín',
    thumbnail: '/placeholder.svg',
    topics: ['STEM', 'Innovación', 'Educación', 'Tecnología'],
    participants: ['Dr. Laura Martín', 'Ing. Sofia Cruz']
  },
  {
    id: '3',
    title: 'Violencia de Género: Prevención y Apoyo',
    description: 'Conversación educativa sobre recursos, prevención y apoyo para víctimas de violencia de género.',
    type: 'audio' as const,
    duration: '28 min',
    author: 'Fundación Esperanza',
    thumbnail: '/placeholder.svg',
    topics: ['Violencia', 'Prevención', 'Apoyo', 'Derechos'],
    participants: ['Psic. Elena Vega', 'Abog. Roberto Silva']
  },
  {
    id: '4',
    title: 'Emprendimiento Femenino en Latinoamérica',
    description: 'Historias de éxito de empresarias que están transformando la economía regional.',
    type: 'podcast' as const,
    duration: '38 min',
    author: 'Emprendedoras Latam',
    thumbnail: '/placeholder.svg',
    topics: ['Emprendimiento', 'Economía', 'Latinoamérica', 'Negocios']
  },
  {
    id: '5',
    title: 'Salud Reproductiva y Derechos de la Mujer',
    description: 'Información esencial sobre salud reproductiva, planificación familiar y derechos sexuales.',
    type: 'video' as const,
    duration: '42 min',
    author: 'Dr. Patricia Hernández',
    thumbnail: '/placeholder.svg',
    topics: ['Salud', 'Derechos', 'Reproducción', 'Bienestar']
  },
  {
    id: '6',
    title: 'Mujeres Indígenas: Guardianas de la Tierra',
    description: 'Voces ancestrales sobre la relación entre las mujeres indígenas y la protección ambiental.',
    type: 'audio' as const,
    duration: '35 min',
    author: 'Comunidades Unidas',
    thumbnail: '/placeholder.svg',
    topics: ['Indígenas', 'Medio Ambiente', 'Tradiciones', 'Sostenibilidad']
  }
];

const allTopics = Array.from(new Set(mediaData.flatMap(item => item.topics)));

export function MediaSection() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredMedia = useMemo(() => {
    return mediaData.filter(item => {
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTopics = selectedTopics.length === 0 || 
                           selectedTopics.some(topic => item.topics.includes(topic));
      
      return matchesType && matchesSearch && matchesTopics;
    });
  }, [selectedType, searchQuery, selectedTopics]);

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const stats = {
    total: mediaData.length,
    podcasts: mediaData.filter(item => item.type === 'podcast').length,
    videos: mediaData.filter(item => item.type === 'video').length,
    audios: mediaData.filter(item => item.type === 'audio').length,
  };

  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-primary p-4 rounded-xl text-primary-foreground text-center">
          <div className="text-2xl font-bold">{stats.total}</div>
          <div className="text-sm opacity-90">Total Contenidos</div>
        </div>
        <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50 text-center">
          <div className="text-2xl font-bold text-primary">{stats.podcasts}</div>
          <div className="text-sm text-muted-foreground">Podcasts</div>
        </div>
        <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50 text-center">
          <div className="text-2xl font-bold text-secondary">{stats.videos}</div>
          <div className="text-sm text-muted-foreground">Videos</div>
        </div>
        <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50 text-center">
          <div className="text-2xl font-bold text-accent">{stats.audios}</div>
          <div className="text-sm text-muted-foreground">Audios</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-80 flex-shrink-0">
          <MediaFilters
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedTopics={selectedTopics}
            onTopicToggle={handleTopicToggle}
            availableTopics={allTopics}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">
                {filteredMedia.length} contenido{filteredMedia.length !== 1 ? 's' : ''} encontrado{filteredMedia.length !== 1 ? 's' : ''}
              </h2>
              {selectedTopics.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="text-sm text-muted-foreground">Filtrado por:</span>
                  {selectedTopics.map(topic => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={cn(
                  viewMode === 'grid' && "bg-gradient-primary"
                )}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={cn(
                  viewMode === 'list' && "bg-gradient-primary"
                )}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Media Grid */}
          <div className={cn(
            "grid gap-6 transition-all duration-300",
            viewMode === 'grid' 
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
              : "grid-cols-1"
          )}>
            {filteredMedia.map((item) => (
              <MediaCard
                key={item.id}
                {...item}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <div className="text-lg">No se encontraron contenidos</div>
                <div className="text-sm">Intenta ajustar tus filtros de búsqueda</div>
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedType('all');
                  setSearchQuery('');
                  setSelectedTopics([]);
                }}
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}