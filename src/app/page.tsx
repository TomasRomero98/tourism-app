import { db } from "@/utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

  addData(); //not working

  return (
    <main>
      <h1>Hello World!</h1>
    </main>
  );
}
