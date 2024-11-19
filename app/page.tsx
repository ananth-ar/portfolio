import { Button } from "@/components/ui/button";
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <FlickeringGrid height={1000} width={1000} color={"#ff0000"} />
    </div>
  );
}
