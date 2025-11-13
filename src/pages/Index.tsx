const Index = () => {
  const instruments = [
    {
      name: "Аккордеон",
      image: "https://cdn.poehali.dev/projects/230ec1d9-b257-4c33-99e1-815199f5d187/files/1a00e157-0407-45c9-ab14-7b00ca6cfdd0.jpg"
    },
    {
      name: "Вокал",
      image: "https://cdn.poehali.dev/projects/230ec1d9-b257-4c33-99e1-815199f5d187/files/c0d86d9e-fdd3-431c-9549-da850099d3a1.jpg"
    },
    {
      name: "Саксофон",
      image: "https://cdn.poehali.dev/projects/230ec1d9-b257-4c33-99e1-815199f5d187/files/adf6bf7f-96de-4b3b-9f46-d3c9e4442415.jpg"
    },
    {
      name: "Перкуссия",
      image: "https://cdn.poehali.dev/projects/230ec1d9-b257-4c33-99e1-815199f5d187/files/e04b8a1e-6214-4353-8068-c988825eb6d5.jpg"
    },
    {
      name: "Клавишные",
      image: "https://cdn.poehali.dev/projects/230ec1d9-b257-4c33-99e1-815199f5d187/files/662f73dd-7258-469f-95bb-81a601290754.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-6xl w-full text-center space-y-16">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary tracking-tight">
            QALABALIQ
          </h1>
          
          <div className="h-1 w-24 bg-accent mx-auto opacity-60"></div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {instruments.map((instrument, index) => (
              <div 
                key={instrument.name}
                className="group cursor-pointer"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-card border-2 border-border hover:border-accent transition-all duration-300">
                  <img 
                    src={instrument.image} 
                    alt={instrument.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-3 text-sm md:text-base text-foreground/70 font-light tracking-wide">
                  {instrument.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;