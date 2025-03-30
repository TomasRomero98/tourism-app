import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/utils/firebase";

export default function Home() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Usuario autenticado:", user.uid);
    } else {
      console.log("No hay usuario autenticado");
    }
  });

  async function addData() {
    await addDoc(collection(db, "usuarios"), {
      firstname: "Tomas",
      lastname: "Romero",
    });
    console.log("Documento agregado!");
  }

  //addData();

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
    </main>
  );
}
