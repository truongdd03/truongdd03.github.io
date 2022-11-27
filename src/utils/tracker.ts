import { child, get, getDatabase, ref, set } from '@firebase/database';
import DeviceDetector from 'device-detector-js';

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

const getDevice = () => {
    const deviceDetector = new DeviceDetector();
    const userAgent = navigator.userAgent;
    return deviceDetector.parse(userAgent);
}

const updateRemote = async (ip: string, rawIp: string) => {
    const database = getDatabase();
    const count = (await getRemote(ip));
    const device = getDevice();
    set(ref(database, `users/${ip}`), {
        count: count + 1,
        ip: rawIp,
        device: device,
    });
}

export const initTracker = () => {
    fetch('https://api.ipify.org/?format=json')
        .then(x => x.json())
        .then(async ({ ip }) => {
            const formattedIp = formatIp(ip);
            updateRemote(formattedIp, ip);
        });
}