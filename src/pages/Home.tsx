import { Link } from 'react-router-dom';
import { Star, Users, Shield, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Hero } from '@/components/Hero';

export const Home = () => {
  const { language } = useLanguage();

  const destinations = [
    {
      name: language === 'en' ? 'Maasai Mara' : 'ماساي مارا',
      description: language === 'en' ? 'The Great Migration & Big Five Safari' : 'الهجرة الكبرى والحيوانات الخمسة الكبار',
      image: '/Maasai mara.jpg',
      link: '/destinations/maasai-mara'
    },
    {
      name: language === 'en' ? 'Amboseli' : 'أمبوسيلي',
      description: language === 'en' ? 'Mt. Kilimanjaro & Elephant Paradise' : 'جبل كيليمنجارو وجنة الأفيال',
      image: '/Maasai mara (2).jpg',
      link: '/destinations/amboseli'
    },
    {
      name: language === 'en' ? 'Diani Beach' : 'شاطئ ديان',
      description: language === 'en' ? 'White Sandy Beaches & Ocean Adventures' : 'الشواطئ الرملية البيضاء ومغامرات المحيط',
      image: '/Diani Beach copy.jpg',
      link: '/destinations/diani-beach'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Why Choose Injaaz Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-6">
              {language === 'en' ? 'Why Choose Injaaz?' : 'لماذا تختار إنجاز؟'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">{language === 'en' ? 'Expert Guides' : 'مرشدون خبراء'}</h3>
              <p className="text-base text-gray-600">{language === 'en' ? 'Team of experienced local guides with extensive knowledge' : 'فريق من المرشدين المحليين ذوي الخبرة الواسعة'}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">{language === 'en' ? 'Luxury Accommodation' : 'إقامة فاخرة'}</h3>
              <p className="text-base text-gray-600">{language === 'en' ? 'The finest hotels and resorts in Kenya' : 'أفضل الفنادق والمنتجعات في كينيا'}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">{language === 'en' ? 'Customized Tours' : 'جولات مخصصة'}</h3>
              <p className="text-base text-gray-600">{language === 'en' ? 'Travel programs designed according to your needs' : 'برامج سياحية مصممة حسب احتياجاتك'}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">{language === 'en' ? 'Safety First' : 'الأمان أولاً'}</h3>
              <p className="text-base text-gray-600">{language === 'en' ? 'Full commitment to the highest safety and security standards' : 'التزام كامل بأعلى معايير السلامة والأمان'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'en' ? 'Popular Destinations' : 'الوجهات الشائعة'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Link
                key={index}
                to={destination.link}
                className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 md:h-80 object-cover object-center brightness-110 contrast-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Additional brightness overlay */}
                <div className="absolute inset-0 bg-white/5" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-base md:text-lg text-yellow-300">{destination.description}</p>
                </div>
                <div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};