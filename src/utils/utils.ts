import router from '../router';

export const scrollIntoView = async (id: string, route: string) => {
    try {
        if (route !== '/') {
            await router.push('/');
        }
        document.getElementById(id)!.scrollIntoView({
            behavior: 'smooth',
        });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        throw new Error(e);
    }
};