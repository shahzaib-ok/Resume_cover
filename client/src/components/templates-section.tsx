import { Card, CardContent } from "@/components/ui/card";

export function TemplatesSection() {
  const templates = [
    {
      name: "Modern Professional",
      description: "Clean and contemporary design perfect for tech and creative roles",
      bgGradient: "from-blue-50 to-blue-100",
      accentColor: "bg-blue-300",
      lightAccent: "bg-blue-200"
    },
    {
      name: "Classic Executive",
      description: "Traditional layout ideal for corporate and executive positions",
      bgGradient: "from-gray-50 to-gray-100",
      accentColor: "bg-gray-400",
      lightAccent: "bg-gray-300"
    },
    {
      name: "Creative Designer",
      description: "Stylish template for creative professionals and designers",
      bgGradient: "from-purple-50 to-purple-100",
      accentColor: "bg-purple-300",
      lightAccent: "bg-purple-200"
    },
    {
      name: "Minimalist",
      description: "Clean and simple design that highlights your content",
      bgGradient: "from-green-50 to-green-100",
      accentColor: "bg-green-300",
      lightAccent: "bg-green-200"
    }
  ];

  return (
    <section id="templates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Resume Templates</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our collection of ATS-friendly templates designed by career experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow" data-testid={`template-${index}`}>
              <div className={`aspect-[3/4] bg-gradient-to-br ${template.bgGradient} p-6 flex items-center justify-center`}>
                <div className="text-center w-full">
                  <div className={`w-full h-4 ${template.accentColor} rounded mb-2`} />
                  <div className={`w-2/3 h-2 ${template.lightAccent} rounded mb-4 mx-auto`} />
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-gray-300 rounded" />
                    <div className="w-4/5 h-1 bg-gray-300 rounded" />
                    <div className="w-3/4 h-1 bg-gray-300 rounded" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{template.name}</h3>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
