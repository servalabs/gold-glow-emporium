import { IMAGES } from '@/images';

export const GuruSection = () => {
  const gurus = [
    {
      name: "શાસન સમ્રાટ પરમ પૂજ્ય આચાર્ય ભગવંત શ્રી નેમિ સૂરીશ્વરજી મહારાજા",
      title: "અદ્વિતીય કૃપા દાન દાતા",
      image: IMAGES.gurus.guru1
    },
    {
      name: "પરમ પૂજ્ય આચાર્ય દેવ શ્રી ચંદ્રોદય સુરીશ્વરજી મહારાજ સાહેબ",
      title: "દિવ્ય આશીર્વાદ દાતા",
      image: IMAGES.gurus.guru2
    },
    {
      name: "પરમ પૂજ્ય આચાર્યદેવ શ્રી અશોકચંદ્ર સૂરીશ્વરજી મહારાજ સાહેબ",
      title: "દિવ્ય આશીર્વાદ દાતા",
      image: IMAGES.gurus.guru3
    },
    {
      name: "પરમ પૂજ્ય આચાર્યદેવ શ્રી સોમચંદ્ર સુરીશ્વરજી મહારાજ સાહેબ",
      title: "દિવ્ય આશીર્વાદ દાતા",
      image: IMAGES.gurus.guru4
    },
    {
      name: "પરમ પૂજ્ય આચાર્યદેવ",
      title: "દિવ્ય આશીર્વાદ દાતા",
      image: IMAGES.gurus.guru5
    },
    {
      name: "પરમ પૂજ્ય આચાર્યદેવ",
      title: "દિવ્ય આશીર્વાદ દાતા",
      image: IMAGES.gurus.guru6
    }
  ];

  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,143,71,0.05)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gold">Guru</span> Bhagwant
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 lg:gap-6 mb-16">
          {gurus.map((guru, index) => (
            <div
              key={index}
              className="group animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 md:p-3 lg:p-4 border border-gold/20 hover:border-gold/50 transition-smooth shadow-elegant cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] w-full">
                  <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                  <img
                    src={guru.image}
                    alt={guru.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
