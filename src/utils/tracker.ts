import {
    child, get, getDatabase, ref, set,
} from '@firebase/database';
import DeviceDetector from 'device-detector-js';

interface Data {
    count: number,
    ip: string,
    devices: Object[],
    timestamps: string[],
    urls: string[],
}

const formatIp = (ip: string): string => ip.replace(/\./g, '-');

const getRemote = async (ip: string): Promise<Data> => {
    const dbRef = ref(getDatabase());
    return await get(child(dbRef, `users/${ip}`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        }
        return {
            count: 0, ip: '', devices: [], timestamps: [], urls: [],
        };
    });
};

const getDevice = () => {
    const deviceDetector = new DeviceDetector();
    const { userAgent } = navigator;
    return deviceDetector.parse(userAgent);
};

const updateRemote = async (ip: string, rawIp: string, url: string) => {
    const database = getDatabase();
    const currentData = await getRemote(ip);
    const device = getDevice();
    const timestamp = (new Date()).toLocaleString('en-US', { timeZone: 'America/Detroit' });
    set(ref(database, `users/${ip}`), {
        count: currentData.count + 1,
        ip: rawIp,
        devices: currentData.devices.concat(device),
        timestamps: currentData.timestamps.concat(timestamp),
        urls: currentData.urls.concat(url),
    });
};

export const initTracker = () => {
    const url = window.location.href;
    fetch('https://api.ipify.org/?format=json')
        .then((x) => x.json())
        .then(async ({ ip }) => {
            const formattedIp = formatIp(ip);
            updateRemote(formattedIp, ip, url);
        });
};