import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export function MyComponent() {
  return (
    <Parallax pages={1}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
    </Parallax>
  );
}
