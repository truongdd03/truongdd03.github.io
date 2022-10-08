export function scrollIntoView(id: string) {
    try {
        document.getElementById(id)!.scrollIntoView({
            behavior: 'smooth'
        });
    } catch (e: any) {
        throw new Error(e);
    }
}
