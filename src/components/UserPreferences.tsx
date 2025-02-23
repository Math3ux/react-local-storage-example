import { useLocalStorage } from "../Hooks/useLocalStorage"

export const UserPreferences = () => {
    const [preferences, setPreferences] = useLocalStorage({
        key: 'preferences',
        initialValue: {
            theme: 'light',
            fontSize: 16
        }
    })

    return (
        <>
            <h1>Preferences</h1>
            <p>Theme: {preferences.theme}</p>
            <p>Font size: {preferences.fontSize}</p>
            <button onClick={() => setPreferences({ ...preferences, theme: 'dark' })}>Dark</button>
            <button onClick={() => setPreferences({ ...preferences, theme: 'light' })}>Light</button>
            <button onClick={() => setPreferences({ ...preferences, fontSize: 12 })}>12px</button>
            <button onClick={() => setPreferences({ ...preferences, fontSize: 16 })}>16px</button>
            <button onClick={() => setPreferences({ ...preferences, fontSize: 20 })}>20px</button>
        </>
    )
}
