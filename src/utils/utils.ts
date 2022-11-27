import router from '../router';

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
