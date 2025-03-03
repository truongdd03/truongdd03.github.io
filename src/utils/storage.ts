import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export const getFromStorage = async (name: string) => {
    const storage = getStorage();
    return await Promise.resolve(getDownloadURL(ref(storage, name))
        .then((url) => url)
        .catch((error) => {
            // Handle any errors
            console.log(error);
            return '';
        }));
};