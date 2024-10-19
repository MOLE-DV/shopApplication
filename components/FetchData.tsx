import { useEffect, useState } from "react";
import { FIREBASE_DB } from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Item {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
}

const Fetch = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsRef = collection(FIREBASE_DB, "items");
        const querySnapshot = await getDocs(itemsRef);

        const itemsList: Item[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Item),
        }));

        setItems(itemsList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return items;
};

export default Fetch;
