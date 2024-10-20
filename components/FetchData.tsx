import { useEffect, useState } from "react";
import { FIREBASE_APP, FIREBASE_DB } from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Constants from "expo-constants";

interface Item {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
}

const Fetch = async () => {
  const [items, setItems] = useState<Item[]>([]);
  const storageURL = Constants.expoConfig?.extra?.firebaseStorageUrl || "";

  try {
    console.log("Fetching items...");
    const itemsRef = collection(FIREBASE_DB, "items");
    const querySnapshot = await getDocs(itemsRef);

    const storage = getStorage(FIREBASE_APP);

    const itemsList: Item[] = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const data = doc.data() as Item;
        const id = data.id;

        const imageRef = ref(storage, `items/${id}.jpeg`);

        let imageUrl = `${storageURL}/images/default.jpeg`;

        try {
          imageUrl = await getDownloadURL(imageRef);
        } catch (error) {
          console.warn(`Image not found for ID ${id}, using default image.`);
        }

        return {
          ...data,
          icon: imageUrl,
        };
      })
    );

    console.log(`Fetched ${itemsList.length} items`);
    setItems(itemsList);
  } catch (error) {
    console.error("Error fetching items:", error);
  }

  return items;
};

export default Fetch;
