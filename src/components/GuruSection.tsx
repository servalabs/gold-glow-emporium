import { IMAGES } from '@/images';

export const GuruSection = () => {
  const gurus = [
    {
      name: "પરમ પૂજ્ય આચાર્ય ભગવંત શ્રી નેમિ સૂરીશ્વરજી મહારાજા",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {gurus.map((guru, index) => (
            <div
              key={index}
              className="group animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-gold/20 hover:border-gold/50 transition-smooth shadow-elegant">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <img
                    src={guru.image}
                    alt={guru.name}
                    className="w-full h-auto aspect-square object-cover transform group-hover:scale-110 transition-smooth"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gold/20 shadow-elegant">
          <div className="space-y-4 text-center">
            <div>
              <p className="text-gold font-semibold mb-2">૯૯ યાત્રાના પ્રેરણા-દાતા</p>
              <p className="font-cormorant text-lg">પરમ પૂજ્ય મુનિ શ્રી નિરાગચંદ્ર વિજયજી મહારાજ સાહેબ</p>
            </div>
            
            <div className="pt-4">
              <p className="text-gold font-semibold mb-2">નિશ્રા દાતા</p>
              <div className="space-y-2 font-cormorant text-base">
                <p>પરમ પૂજ્યઆચાર્યદેવ શ્રી શ્રમણચંદ્ર સૂરીશ્વરજી મહારાજ સાહેબ</p>
                <p>પરમ પૂજ્ય આચાર્યદેવ શ્રી સિદ્ધચંદ્ર સૂરીશ્વરજી મહારાજ સાહેબ</p>
                <p>પરમ પૂજ્ય આચાર્યદેવ શ્રી શ્રુતચંદ્ર સૂરીશ્વરજી મહારાજ સાહેબ આદિ મુનિ વૃંદ</p>
                <p>પરમ પૂજ્ય સાધ્વીશ્રી પ્રવિણાશ્રીજી મહારાજ સાહેબ ના શિષ્યા</p>
                <p>પરમ પૂજ્ય સાધ્વીશ્રી વિનિતયશાશ્રીજી મહારાજ સાહેબ</p>
                <p>પરમ પૂજ્ય સાધ્વીશ્રી મંગલયશાશ્રીજી મહારાજ સાહેબ. આદિ ઠાણા</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
