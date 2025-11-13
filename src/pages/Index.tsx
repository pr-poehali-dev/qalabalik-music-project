import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const musicians = [
    {
      name: "Эльдар Мамедов",
      instrument: "Аккордеон",
      icon: "Music",
      description: "Виртуоз аккордеона, создающий уникальное звучание"
    },
    {
      name: "Эмине Асанова",
      instrument: "Вокал",
      icon: "Mic",
      description: "Голос, передающий душу крымскотатарской культуры"
    },
    {
      name: "Ремзи Сейтумеров",
      instrument: "Саксофон",
      icon: "Music2",
      description: "Мастер саксофона с неповторимым стилем"
    },
    {
      name: "Айше Джемилева",
      instrument: "Перкуссия",
      icon: "Drum",
      description: "Ритмы, пульсирующие в сердце музыки"
    },
    {
      name: "Сервер Аметов",
      instrument: "Клавишные",
      icon: "Piano",
      description: "Современное звучание традиционных мелодий"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">QALABALIQ</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#musicians" className="text-foreground hover:text-primary transition-colors">Музыканты</a>
          </nav>
        </div>
      </header>

      <section 
        id="home" 
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/230ec1d9-b257-4c33-99e1-815199f5d187/files/7d731d4f-73c7-4736-bf62-921837447f93.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
              QALABALIQ
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/90 font-semibold">
              Крымскотатарская музыкальная группа
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Традиции предков в современном звучании. Этническая музыка, рождённая в сердце Крыма
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="Play" className="mr-2" size={20} />
                Слушать музыку
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Calendar" className="mr-2" size={20} />
                Концерты
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-semibold">Наши инструменты</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Звучание QALABALIQ
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Уникальное сочетание традиционных и современных инструментов создаёт неповторимую атмосферу
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {["Аккордеон", "Вокал", "Саксофон", "Перкуссия", "Клавишные"].map((instrument) => (
              <Card key={instrument} className="hover-scale border-2 border-accent/20 hover:border-accent/50 transition-all">
                <CardContent className="p-6 text-center">
                  <Icon name="Music" className="mx-auto mb-3 text-accent" size={32} />
                  <p className="font-semibold text-foreground">{instrument}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="musicians" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-secondary/20 rounded-full mb-4">
              <span className="text-secondary font-semibold">Наша команда</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Музыканты
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Талантливые мастера, объединённые любовью к крымскотатарской музыке
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {musicians.map((musician, index) => (
              <Card 
                key={index} 
                className="group hover-scale overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all"
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-card flex items-center justify-center border-4 border-card group-hover:border-primary/50 transition-all">
                      <Icon name={musician.icon as any} className="text-primary" size={40} />
                    </div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {musician.name}
                    </h3>
                    <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-3">
                      <span className="text-accent font-semibold text-sm">
                        {musician.instrument}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {musician.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Присоединяйтесь к нашему музыкальному путешествию
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Следите за нашими выступлениями и новыми композициями
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground">
              <Icon name="Instagram" className="mr-2" size={20} />
              Instagram
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-accent hover:bg-accent hover:text-accent-foreground">
              <Icon name="Youtube" className="mr-2" size={20} />
              YouTube
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Icon name="Music" className="mr-2" size={20} />
              Spotify
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary mb-2">QALABALIQ</h3>
          <p className="text-muted-foreground mb-4">
            Крымскотатарская музыкальная группа
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 QALABALIQ. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
