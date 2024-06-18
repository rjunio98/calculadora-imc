import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import ReferenceTable from "./components/ReferenceTable";

function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto py-24 px-48">
      <section id="form">
        <form>
          <div>
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input
              type="text"
              id="weight"
              className="mt-1"
            />
          </div>

          <div className="mt-4">
            <Label htmlFor="height">Altura (cm)</Label>
            <Input
              type="text"
              id="height"
              className="mt-1"
            />
          </div>
          <Button type="submit">Calcular</Button>
        </form>
      </section>

      <section
        id="result"
        className="py-10 px-4 h-40"
      >
        <p className="text-center text-neutral-400 text-xl">
          Saiba agora se está no seu peso idela !
        </p>
      </section>
      <section id="reference-table">
        <ReferenceTable />
      </section>
    </main>
  );
}

export default App;
