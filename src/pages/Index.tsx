import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedGenerator, setSelectedGenerator] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');

  const generators = [
    {
      id: 'text',
      title: 'Генератор текста',
      description: 'Создавайте посты, статьи и описания для любых площадок',
      icon: 'FileText',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'image',
      title: 'Генератор изображений',
      description: 'AI создаст уникальные визуалы для вашего контента',
      icon: 'Image',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'video',
      title: 'Генератор видео',
      description: 'Превращайте идеи в видеоролики за минуты',
      icon: 'Video',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'audio',
      title: 'Генератор аудио',
      description: 'Озвучка, музыка и звуковые эффекты по запросу',
      icon: 'Mic',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: 'Instagram', color: 'text-pink-600', formats: ['Пост', 'Stories', 'Reels'] },
    { name: 'YouTube', icon: 'Youtube', color: 'text-red-600', formats: ['Видео', 'Shorts', 'Описание'] },
    { name: 'TikTok', icon: 'Music', color: 'text-slate-900', formats: ['Видео', 'Подпись'] },
    { name: 'VK', icon: 'MessageCircle', color: 'text-blue-600', formats: ['Пост', 'Статья', 'Клип'] },
    { name: 'Telegram', icon: 'Send', color: 'text-sky-500', formats: ['Пост', 'Канал'] },
    { name: 'Twitter/X', icon: 'Twitter', color: 'text-slate-700', formats: ['Твит', 'Тред'] }
  ];

  const templates = [
    { id: 1, title: 'Промо-пост товара', platform: 'Instagram', type: 'Текст + Изображение' },
    { id: 2, title: 'Обзор продукта', platform: 'YouTube', type: 'Видео' },
    { id: 3, title: 'Вирусный тренд', platform: 'TikTok', type: 'Видео + Музыка' },
    { id: 4, title: 'Новостной пост', platform: 'VK', type: 'Текст' },
    { id: 5, title: 'Анонс события', platform: 'Telegram', type: 'Текст + Изображение' },
    { id: 6, title: 'Мотивационная цитата', platform: 'Instagram', type: 'Изображение' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>AI-Фабрика Контента</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Создавайте контент<br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              в 10 раз быстрее
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Генерируйте тексты, изображения, видео и аудио для всех соцсетей с помощью искусственного интеллекта
          </p>
        </div>

        <Tabs defaultValue="generators" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="generators" className="text-base">
              <Icon name="Wand2" size={18} className="mr-2" />
              Генераторы
            </TabsTrigger>
            <TabsTrigger value="templates" className="text-base">
              <Icon name="LayoutTemplate" size={18} className="mr-2" />
              Шаблоны
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generators" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {generators.map((gen) => (
                <Card
                  key={gen.id}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 ${
                    selectedGenerator === gen.id ? 'border-primary shadow-lg' : 'border-transparent'
                  } ${gen.bgColor}`}
                  onClick={() => setSelectedGenerator(gen.id)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gen.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={gen.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{gen.title}</h3>
                  <p className="text-sm text-muted-foreground">{gen.description}</p>
                </Card>
              ))}
            </div>

            {selectedGenerator && (
              <Card className="p-8 animate-scale-in border-2">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <Icon name="Sparkles" size={28} className="text-primary" />
                    Создать {generators.find(g => g.id === selectedGenerator)?.title.toLowerCase()}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Опишите, что хотите создать</label>
                      <Textarea
                        placeholder="Например: Промо-пост для нового курса по Python с акцентом на карьерные перспективы"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="min-h-32 resize-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Стиль</label>
                        <Input placeholder="Профессиональный, дружелюбный..." />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Целевая аудитория</label>
                        <Input placeholder="Начинающие программисты..." />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full h-12 text-base font-medium" size="lg">
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Сгенерировать контент
                  </Button>
                </div>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="templates" className="animate-fade-in">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Выберите платформу</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {platforms.map((platform) => (
                  <Card
                    key={platform.name}
                    className="p-4 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary"
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center ${platform.color}`}>
                        <Icon name={platform.icon} size={24} />
                      </div>
                      <h4 className="font-medium mb-2">{platform.name}</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {platform.formats.map((format) => (
                          <Badge key={format} variant="secondary" className="text-xs">
                            {format}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Готовые шаблоны</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <Card
                    key={template.id}
                    className="p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="text-xs">
                        {template.platform}
                      </Badge>
                      <Icon
                        name="ArrowRight"
                        size={20}
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{template.title}</h4>
                    <p className="text-sm text-muted-foreground">{template.type}</p>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mx-auto flex items-center justify-center">
              <Icon name="Zap" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold">Мгновенная генерация</h3>
            <p className="text-muted-foreground">Создавайте контент за секунды, а не часы</p>
          </div>
          
          <div className="space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto flex items-center justify-center">
              <Icon name="Target" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold">Под любую площадку</h3>
            <p className="text-muted-foreground">Адаптируйте контент для всех соцсетей</p>
          </div>
          
          <div className="space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mx-auto flex items-center justify-center">
              <Icon name="TrendingUp" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold">Высокое качество</h3>
            <p className="text-muted-foreground">AI создаёт контент уровня профессионалов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
