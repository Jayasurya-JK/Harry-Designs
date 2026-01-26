import { ParallaxGallery } from '@/features/parallax-gallery';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-eerie overflow-hidden"
    >
      {/* Background decorative gradient */}
      <div className="absolute inset-0"></div>

      <div className="w-full relative z-10 pt-20 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
          {/* LEFT COLUMN: Text Content - 50% Width */}
          <HeroContent />

          {/* RIGHT COLUMN: Parallax Gallery - 50% Width */}
          <div className="order-2 lg:order-2 h-auto lg:h-screen w-full flex items-center justify-center relative overflow-hidden -mt-8 lg:mt-0">
            {/* Gradient overlay on the left to blend with text */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-eerie to-transparent z-20 pointer-events-none" />
            <ParallaxGallery />
          </div>
        </div>

        {/* Scroll indicator - Only visible on desktop */}
        <ScrollIndicator />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
    </section>
  );
};

export default HeroSection;
