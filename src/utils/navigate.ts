export const openUrl = (url: string) => {
    window.open(url, '__blank');
};

export const scrollTo = (id?: string) => {
    if (!id) return;

    if (id.toLocaleLowerCase() == 'home') {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const el = document.getElementById(id.toLocaleLowerCase());
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};