import HeroFlats from './HeroFlats.tsx'; // Ensure the path is correct

export default function Hero() {
  
  return (
    <div>
      <HeroFlats
        title="Wear the shoes comfortably"
        description=""
        image={{ src: 'https://contents.mediadecathlon.com/p2393856/9cfe8a5fa9db57a335c69ba013342454/p2393856.jpg?format=auto&quality=70&f=650x0',alt:'hello there ;' }}
        placement="right"
        cta={[
          { id: "cta-1", href: "/shop", text: "Shop Now", outline: false },
          { id: "cta-2", href: "/explore", text: "Explore", outline: true },
        ]}
      />
    </div>
  );
}
