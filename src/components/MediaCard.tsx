import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Headphones, Video, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MediaCardProps {
  id: string;
  title: string;
  description: string;
  type: 'podcast' | 'video' | 'audio';
  duration: string;
  author: string;
  thumbnail: string;
  topics: string[];
  participants?: string[];
}

const typeConfig = {
  podcast: {
    icon: Headphones,
    label: 'Podcast',
    color: 'bg-gradient-primary'
  },
  video: {
    icon: Video,
    label: 'Video',
    color: 'bg-gradient-hero'
  },
  audio: {
    icon: Play,
    label: 'Audio',
    color: 'bg-accent'
  }
};

export function MediaCard({ 
  title, 
  description, 
  type, 
  duration, 
  author, 
  thumbnail, 
  topics, 
  participants 
}: MediaCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const config = typeConfig[type];
  const Icon = config.icon;

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Card 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-1",
        "bg-card/50 backdrop-blur-sm border-border/50",
        isHovered && "shadow-glow"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className={cn("p-2 rounded-lg text-white", config.color)}>
                <Icon className="h-4 w-4" />
              </div>
              <Badge variant="secondary" className="text-xs">
                {config.label}
              </Badge>
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </CardTitle>
            <CardDescription className="mt-1 text-sm line-clamp-2">
              {description}
            </CardDescription>
          </div>
          <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gradient-subtle flex-shrink-0">
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
            <span>por {author}</span>
            {participants && participants.length > 0 && (
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{participants.length} participantes</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-1">
            {topics.slice(0, 3).map((topic) => (
              <Badge 
                key={topic} 
                variant="outline" 
                className="text-xs border-border/60 hover:border-primary/60 transition-colors"
              >
                {topic}
              </Badge>
            ))}
            {topics.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{topics.length - 3}
              </Badge>
            )}
          </div>
          
          <Button 
            onClick={handlePlay}
            className={cn(
              "w-full transition-all duration-300",
              isPlaying 
                ? "bg-secondary hover:bg-secondary/90" 
                : "bg-gradient-primary hover:shadow-glow"
            )}
          >
            <Icon className="h-4 w-4 mr-2" />
            {isPlaying ? 'Pausar' : 'Reproducir'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}