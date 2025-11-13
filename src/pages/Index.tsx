const Index = () => {
  const instruments = [
    "Аккордеон",
    "Вокал", 
    "Саксофон",
    "Перкуссия",
    "Клавишные"
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center space-y-16">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary tracking-tight">
            QALABALIQ
          </h1>
          
          <div className="h-1 w-24 bg-accent mx-auto opacity-60"></div>
        </div>

        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {instruments.map((instrument, index) => (
              <div 
                key={instrument}
                className="text-lg md:text-xl text-foreground/80 font-light tracking-wide hover:text-primary transition-colors cursor-default"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {instrument}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
