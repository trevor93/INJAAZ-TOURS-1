
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export interface Tour {
  id: string;
  name: string;
  description: string;
  price: number;
  // Add any other fields you have for your tours
}

export const getTours = async (): Promise<Tour[]> => {
  const toursCollection = collection(db, 'tours');
  const tourSnapshot = await getDocs(toursCollection);
  const tourList = tourSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Tour[];
  return tourList;
};
