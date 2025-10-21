import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const Index = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(0);

  const topPlayers = [
    { rank: 1, name: "Ausbant", tag: "Robitron", rating: 2847, wins: 156, losses: 43, winRate: 78, avatar: "AB" },
    { rank: 2, name: "CyberNinja", tag: "Shadow", rating: 2756, wins: 142, losses: 51, winRate: 74, avatar: "CN" },
    { rank: 3, name: "PixelWarrior", tag: "Storm", rating: 2698, wins: 138, losses: 55, winRate: 71, avatar: "PW" },
    { rank: 4, name: "NeonDragon", tag: "Blaze", rating: 2621, wins: 129, losses: 62, winRate: 68, avatar: "ND" },
    { rank: 5, name: "QuantumGamer", tag: "Pulse", rating: 2589, wins: 124, losses: 67, winRate: 65, avatar: "QG" }
  ];

  const recentMatches = [
    { id: 1, player1: "Ausbant", player2: "CyberNinja", score: "16-14", map: "Dust II", time: "2 часа назад" },
    { id: 2, player1: "PixelWarrior", player2: "NeonDragon", score: "16-12", map: "Mirage", time: "4 часа назад" },
    { id: 3, player1: "QuantumGamer", player2: "Ausbant", score: "14-16", map: "Inferno", time: "6 часов назад" }
  ];

  const stats = [
    { label: "Активные игроки", value: "12,847", icon: "Users", change: "+12.5%" },
    { label: "Матчей сегодня", value: "3,421", icon: "Gamepad2", change: "+8.3%" },
    { label: "Средний рейтинг", value: "2,456", icon: "TrendingUp", change: "+3.2%" },
    { label: "Активные турниры", value: "24", icon: "Trophy", change: "+5.0%" }
  ];

  return (
    <div className="min-h-screen bg-dark-navy text-white">
      <nav className="border-b border-border/50 bg-card/30 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center font-rajdhani font-bold text-xl">
                U
              </div>
              <h1 className="text-2xl font-rajdhani font-bold bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
                UNMATCHED
              </h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6 font-rajdhani">
              <a href="#" className="hover:text-neon-cyan transition-colors">Главная</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Игроки</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Статистика</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Рейтинг</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Команды</a>
            </div>

            <Button className="bg-gradient-to-r from-neon-pink to-neon-cyan text-white border-0 font-rajdhani font-semibold hover:scale-105 transition-transform">
              <Icon name="User" className="mr-2" size={18} />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <Card key={idx} className="glass-card border-border/50 p-6 hover:border-neon-cyan/50 transition-all animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 flex items-center justify-center">
                    <Icon name={stat.icon as any} className="text-neon-cyan" size={24} />
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-inter">
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-3xl font-rajdhani font-bold mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm font-inter">{stat.label}</p>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="glass-card border-border/50">
              <div className="p-6 border-b border-border/50">
                <h2 className="text-2xl font-rajdhani font-bold flex items-center gap-2">
                  <Icon name="Trophy" className="text-neon-cyan" size={28} />
                  Топ игроков
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {topPlayers.map((player, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedPlayer(idx)}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all cursor-pointer ${
                        selectedPlayer === idx
                          ? 'bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10 border-2 border-neon-cyan'
                          : 'bg-muted/30 hover:bg-muted/50 border-2 border-transparent'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-rajdhani font-bold text-xl ${
                        idx === 0 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                        idx === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500' :
                        idx === 2 ? 'bg-gradient-to-br from-orange-700 to-orange-900' :
                        'bg-gradient-to-br from-neon-pink/50 to-neon-cyan/50'
                      }`}>
                        #{player.rank}
                      </div>

                      <Avatar className="w-12 h-12 border-2 border-neon-cyan/50">
                        <AvatarFallback className="bg-gradient-to-br from-neon-pink/30 to-neon-cyan/30 font-rajdhani font-bold">
                          {player.avatar}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <p className="font-rajdhani font-semibold text-lg">{player.name}</p>
                        <p className="text-muted-foreground text-sm font-inter">#{player.tag}</p>
                      </div>

                      <div className="text-right">
                        <p className="font-rajdhani font-bold text-xl text-neon-cyan">{player.rating}</p>
                        <p className="text-muted-foreground text-sm font-inter">Рейтинг</p>
                      </div>

                      <div className="hidden md:block">
                        <div className="flex items-center gap-2">
                          <div className="text-right">
                            <p className="font-inter text-sm text-green-400">{player.wins}П</p>
                            <p className="font-inter text-sm text-red-400">{player.losses}Н</p>
                          </div>
                          <div className="w-16">
                            <Progress value={player.winRate} className="h-2" />
                            <p className="text-xs text-center mt-1 font-inter text-muted-foreground">{player.winRate}%</p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-neon-pink to-neon-cyan border-0 font-rajdhani hover:scale-105 transition-transform"
                      >
                        Профиль
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="glass-card border-border/50 mb-6">
              <div className="p-6 border-b border-border/50">
                <h2 className="text-xl font-rajdhani font-bold flex items-center gap-2">
                  <Icon name="BarChart3" className="text-neon-cyan" size={24} />
                  Статистика игрока
                </h2>
              </div>
              <div className="p-6 space-y-6">
                {topPlayers[selectedPlayer] && (
                  <>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-neon-cyan">
                        <AvatarFallback className="bg-gradient-to-br from-neon-pink/30 to-neon-cyan/30 font-rajdhani font-bold text-xl">
                          {topPlayers[selectedPlayer].avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-rajdhani font-bold text-xl">{topPlayers[selectedPlayer].name}</p>
                        <p className="text-muted-foreground font-inter">#{topPlayers[selectedPlayer].tag}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-inter text-muted-foreground">Рейтинг</span>
                          <span className="font-rajdhani font-bold text-neon-cyan">{topPlayers[selectedPlayer].rating}</span>
                        </div>
                        <Progress value={(topPlayers[selectedPlayer].rating / 3000) * 100} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-inter text-muted-foreground">Win Rate</span>
                          <span className="font-rajdhani font-bold text-green-400">{topPlayers[selectedPlayer].winRate}%</span>
                        </div>
                        <Progress value={topPlayers[selectedPlayer].winRate} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="text-center p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                          <p className="text-2xl font-rajdhani font-bold text-green-400">{topPlayers[selectedPlayer].wins}</p>
                          <p className="text-xs font-inter text-muted-foreground">Побед</p>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                          <p className="text-2xl font-rajdhani font-bold text-red-400">{topPlayers[selectedPlayer].losses}</p>
                          <p className="text-xs font-inter text-muted-foreground">Поражений</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Card>

            <Card className="glass-card border-border/50">
              <div className="p-6 border-b border-border/50">
                <h2 className="text-xl font-rajdhani font-bold flex items-center gap-2">
                  <Icon name="Zap" className="text-neon-cyan" size={24} />
                  Быстрые действия
                </h2>
              </div>
              <div className="p-6 space-y-3">
                <Button className="w-full bg-gradient-to-r from-neon-pink to-neon-cyan border-0 font-rajdhani font-semibold hover:scale-105 transition-transform">
                  <Icon name="Gamepad2" className="mr-2" size={18} />
                  Найти матч
                </Button>
                <Button variant="outline" className="w-full border-border font-rajdhani font-semibold hover:border-neon-cyan transition-colors">
                  <Icon name="Users" className="mr-2" size={18} />
                  Создать команду
                </Button>
                <Button variant="outline" className="w-full border-border font-rajdhani font-semibold hover:border-neon-cyan transition-colors">
                  <Icon name="Calendar" className="mr-2" size={18} />
                  Турниры
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <Card className="glass-card border-border/50">
          <div className="p-6 border-b border-border/50">
            <h2 className="text-2xl font-rajdhani font-bold flex items-center gap-2">
              <Icon name="Clock" className="text-neon-cyan" size={28} />
              Последние матчи
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentMatches.map((match) => (
                <div key={match.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all border border-border/50 hover:border-neon-cyan/50">
                  <div className="flex-1 flex items-center gap-4">
                    <div className="text-right flex-1">
                      <p className="font-rajdhani font-semibold text-lg">{match.player1}</p>
                    </div>
                    
                    <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 border border-neon-cyan/30">
                      <p className="font-rajdhani font-bold text-xl text-neon-cyan">{match.score}</p>
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-rajdhani font-semibold text-lg">{match.player2}</p>
                    </div>
                  </div>

                  <div className="text-right hidden md:block">
                    <Badge variant="outline" className="mb-1 font-inter border-neon-cyan/50">
                      {match.map}
                    </Badge>
                    <p className="text-xs text-muted-foreground font-inter">{match.time}</p>
                  </div>

                  <Button size="sm" variant="outline" className="border-border hover:border-neon-cyan font-rajdhani">
                    Детали
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </main>

      <footer className="border-t border-border/50 mt-16 bg-card/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-rajdhani font-bold text-lg mb-4 bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
                UNMATCHED
              </h3>
              <p className="text-sm text-muted-foreground font-inter">
                Лучшая платформа для киберспортивной статистики и рейтингов
              </p>
            </div>
            
            <div>
              <h4 className="font-rajdhani font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-sm font-inter">
                <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">Новости</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-rajdhani font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm font-inter">
                <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">Discord</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">Reddit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-rajdhani font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm font-inter">
                <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">Контакты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">Правила</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-sm text-muted-foreground font-inter">
              © 2024 UNMATCHED. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
