import { useState } from "react";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto px-4 py-6">
        <Button variant="destructive" onClick={() => setCount(count + 1)}>
          {count}
        </Button>
      </main>
    </>
  );
}

export default App;
