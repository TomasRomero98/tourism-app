import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebaseConfig";
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

  const db = getFirestore(app);

  async function addData() {
    await addDoc(collection(db, "usuarios"), { firstname: "Juan", lastname: "Martinez" });
    console.log("Documento agregado!");
  }

  addData(); //not working

  return (
    <main>
      <h1>Hello World!</h1>
    </main>
  );
}
