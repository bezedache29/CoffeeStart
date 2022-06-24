import { collection, query, where, getDocs, orderBy } from "firebase/firestore"
import { db } from "../../firebase"

export default function useFirestore() {

  const searchCollection = async (name) => {
    let array = []

    const q = query(collection(db, name))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((item) => {
      array.push(item.data())
    })

    return array
  }

  return {
    searchCollection
  }
}