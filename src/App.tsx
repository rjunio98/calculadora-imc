import Label from "./components/Label";

function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto py-24 px-48">
      <section id="form">
        <form>
          <div>
            <Label htmlFor="weight">Peso (kg)</Label>
            <input
              type="text"
              id="weight"
              className="block w-full border border-rose-400 rounded p-3"
            />
          </div>

          <div className="mt-4">
            <Label htmlFor="height">Altura (cm)</Label>
            <input
              type="text"
              id="height"
              className="block w-full border border-rose-400 rounded p-3"
            />
          </div>
          <button className="mt-6 bg-rose-400 text-white w-full rounded p-3">
            Calcular
          </button>
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
        <table className="mx-auto text-neutral-600 text-left">
          <thead className="bg-zinc-100 text-rose-400 ">
            <tr>
              <th className="px-6 py-2">IMC</th>
              <th className="px-6 py-2">Classificação</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(even)]:bg-zinc-100 [&>tr:nth-child(odd)]:bg-white [&>tr>td]:px-6 [&>tr>td]:py-1">
            <tr>
              <td>Menor que 17</td>
              <td>Muito abaixo do peso</td>
            </tr>
            <tr>
              <td>Meno que 18,5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>Entre 18,5 e 24,9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>Entre 25 e 29,9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>Entre 30 e 34,9</td>
              <td>Obesidade grau 1</td>
            </tr>
            <tr>
              <td>Entre 35 e 39,9</td>
              <td>Obesidade grau 2</td>
            </tr>
            <tr>
              <td>Maior que 40</td>
              <td>Obesidade grau 3</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
