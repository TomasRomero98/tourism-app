import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { mediaStorage } from "./firebase";

export const uploadImage = async (file: File) => {
  if (!file) return null;

  const storageRef = ref(mediaStorage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);

  return downloadURL;
};
