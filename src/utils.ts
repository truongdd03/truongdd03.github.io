import { child, get, getDatabase, ref, set } from '@firebase/database';
import router from './router';

export const scrollIntoView = async (id: string, route: string) => {
    try {
        if (route !== '/') {
            await router.push('/');
        }
        document.getElementById(id)!.scrollIntoView({
            behavior: 'smooth'
        });
    } catch (e: any) {
        throw new Error(e);
    }
}

const formatIp = (ip: string): string => {
    return ip.replace(/\./g, '-');
}

const getRemote = async (ip: string): Promise<number> => {
    const dbRef = ref(getDatabase());
    return await get(child(dbRef, `users/${ip}`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val().count;
        } else {
            return 0;
        }
    });
}

const updateRemote = async (ip: string) => {
    const database = getDatabase();
    const count = (await getRemote(ip));
    set(ref(database, `users/${ip}`), {
        count: count + 1
    });
}

export const writeUserIP = () => {
    fetch('https://api.ipify.org/?format=json')
        .then(x => x.json())
        .then(async ({ ip }) => {
            const formattedIp = formatIp(ip);
            updateRemote(formattedIp);
        });
}