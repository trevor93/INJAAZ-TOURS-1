import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative h-screen sm:h-screen overflow-hidden">
      <img
        src="/Cheetah Running Home page. Hero section.jpg"
        alt="Cheetah running in the African savanna"
        className="absolute z-0 w-full h-full object-cover object-[center_30%] sm:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      {/* Brightness overlay to make the image appear brighter */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              {language === 'en' ? 'Welcome to Injaaz' : 'مرحباً بكم في إنجاز'}
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-yellow-300 mb-2 sm:mb-3 font-medium">
              {language === 'en' ? 'Premium Tour Agency in Kenya' : 'وكالة الجولات السياحية الفاخرة في كينيا'}
            </p>
            <p className="text-base sm:text-lg md:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed">
              {language === 'en' ? 'Discover the enchanting beauty of Kenya with Injaaz. We offer unforgettable travel experiences that combine luxury with authenticity, from Maasai Mara safaris to the golden beaches of Diani.' : 'اكتشف جمال كينيا الساحر مع إنجاز. نقدم لك تجارب سياحية لا تُنسى تجمع بين الفخامة والأصالة، من سفاري ماساي مارا إلى شواطئ ديان الذهبية.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
              <Link
                to="/tours"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105 text-center"
              >
                {language === 'en' ? 'Explore Tours' : 'استكشف الجولات'}
              </Link>
              <Link
                to="/request-quote"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-full text-base font-semibold hover:bg-white/30 transition-all text-center"
              >
                {language === 'en' ? 'Get Quote' : 'احصل على عرض سعر'}
              </Link>
              <Link
                to="/tours/custom"
                className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full text-base font-semibold hover:bg-yellow-400 hover:text-white transition-all text-center"
              >
                {language === 'en' ? 'Custom Package' : 'باقة مخصصة'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};