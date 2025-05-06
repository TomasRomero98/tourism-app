export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center bg-hero bg-cover bg-center h-[80vh] w-full">
        <h1 className="text-3xl font-bold">Nombre de marca</h1>
      </div>
      <section className="w-full min-h-[15vh] flex-aligned flex-col">
        <h1>Diferenciadores</h1>
        <div className="flex-aligned">
          <div className="flex-aligned flex-col m-10">
            <img
              src="/images/hiace.jpeg"
              alt="Toyota Hiace"
              className="h-20 w-20 rounded-full object-cover"
            />
            <h3>Comodidad</h3>
          </div>
          <div className="flex-aligned flex-col m-10">
            <img
              src="/images/paisaje1.webp"
              alt="Toyota Hiace"
              className="h-20 w-20 rounded-full object-cover"
            />
            <h3>Destinos unicos</h3>
          </div>
          <div className="flex-aligned flex-col m-10">
            <img
              src="/images/paisaje2.jpg"
              alt="Toyota Hiace"
              className="h-20 w-20 rounded-full object-cover"
            />
            <h3>Atención personalizada</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
