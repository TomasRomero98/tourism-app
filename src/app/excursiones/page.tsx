"use client";
import { uploadImage } from "@/utils/uploadImage";
import { useState } from "react";

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const handleUpload = async () => {
    if (!file) return;

    const url = await uploadImage(file);
    if (url) {
      setImageUrl(url);
      console.log("Image uploaded successfully:", url);
    }
  };
  return (
    <main>
      <h1>This is the Dashboard</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>

        {imageUrl && (
          <div>
            <p>Uploaded Image:</p>
            <img src={imageUrl} alt="Uploaded" width={200} />
          </div>
        )}
      </div>
    </main>
  );
}
