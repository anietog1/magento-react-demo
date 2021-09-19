define(['react', 'html'], ({ useState, useCallback, useEffect }, html) => {
    const Timer = () => {
        const [count, setCount] = useState(0);
        const [paused, setPaused] = useState(false);

        const handleTogglePaused = useCallback(() => {
            setPaused((paused) => !paused);
        });

        useEffect(() => {
            if (!paused) {
                const timer = setInterval(() => {
                    setCount((count) => count + 1);
                }, 1000);

                return () => clearInterval(timer);
            }
        }, [paused]);

        return html`
            <div>
                <span>${count}</span>
                <button onClick=${handleTogglePaused}>${paused ? 'Resume' : 'Pause'}</button>
            </div>
        `;
    };

    return Timer;
});
