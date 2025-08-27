import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Crown, Zap, Lock } from "lucide-react";

interface BadgeItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}

interface BadgeGridProps {
  badges: BadgeItem[];
}

const iconMap = {
  star: Star,
  award: Award,
  crown: Crown,
  zap: Zap,
};

export const BadgeGrid = ({ badges }: BadgeGridProps) => {
  const earnedBadges = badges.filter(badge => badge.earned);
  const availableBadges = badges.filter(badge => !badge.earned);

  const BadgeCard = ({ badge }: { badge: BadgeItem }) => {
    const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Star;
    
    return (
      <Card className={`transition-smooth hover:scale-105 ${
        badge.earned 
          ? 'bg-gradient-primary text-primary-foreground badge-glow' 
          : 'bg-muted/50 opacity-75 hover:opacity-90'
      }`}>
        <CardContent className="p-4 text-center">
          <div className="mb-3">
            {badge.earned ? (
              <IconComponent className="w-8 h-8 mx-auto text-primary-foreground" />
            ) : (
              <Lock className="w-8 h-8 mx-auto text-muted-foreground" />
            )}
          </div>
          <h3 className={`font-semibold mb-1 ${
            badge.earned ? 'text-primary-foreground' : 'text-foreground'
          }`}>
            {badge.name}
          </h3>
          <p className={`text-sm mb-2 ${
            badge.earned ? 'text-primary-foreground/80' : 'text-muted-foreground'
          }`}>
            {badge.description}
          </p>
          {badge.earned && badge.earnedDate && (
            <Badge variant="secondary" className="text-xs bg-white/20 text-primary-foreground">
              {new Date(badge.earnedDate).toLocaleDateString('es-ES')}
            </Badge>
          )}
        </CardContent>
      </Card>
    );
  };

   


  return (
    <div className="space-y-6">

      {/* Earned Badges */}
      {earnedBadges.length > 0 && (
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Star className="w-5 h-5" />
              Insignias Obtenidas ({earnedBadges.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {earnedBadges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Available Badges */}
      {availableBadges.length > 0 && (
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="text-xl text-muted-foreground flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Insignias por Conseguir ({availableBadges.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableBadges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};