import { useMenubarStore } from '@/stores/menubarStore';
import router from '../router';

import { app } from '@/main';

export const scrollIntoView = async (id: string, route: string) => {
    try {
        useMenubarStore().setForceHide(true);
        if (route !== '/') {
            await router.push('/');
        }
        document.getElementById(id)!.scrollIntoView({
            behavior: 'smooth',
        });

        // Check if scroll is finished
        let currPageYOffset = window.scrollY;
        const scrollDone = setInterval(() => {
            if (currPageYOffset == window.scrollY) {
                clearInterval(scrollDone);
                // Scroll finished
                useMenubarStore().setForceHide(false);
            }
            currPageYOffset = window.scrollY;
        }, 100);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        throw new Error(e);
    }
};

/**
 * Display a toast/notification
 *
 * @param severity
 * @param summary
 * @param detail
 * @param life
 */
export const showToast = (severity: 'success' | 'info' | 'error' | 'warn', summary?: string, detail?: string, life = 5000) => {
    app.config.globalProperties.$toast.add({
        severity,
        summary,
        detail,
        life,
    });
};