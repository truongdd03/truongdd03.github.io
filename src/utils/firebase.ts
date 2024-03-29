import {
    child, get, getDatabase, ref, set,
} from 'firebase/database';

export const fetchRemote = async (path: string) => {
    if (!path) return null;

    const dbRef = ref(getDatabase());
    return await get(child(dbRef, path)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        }
        return null;
    });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const writeRemote = async (path: string, content: any) => {
    const database = getDatabase();
    await set(ref(database, path), content);
};