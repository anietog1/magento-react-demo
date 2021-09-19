define(['react', 'Agusquiw_React/js/hooks', 'html'], (
    { useCallback },
    { useSharedState },
    html
) => {
    const SharedCounter = (props) => {
        const { stateName = 'state', initialValue = 0 } = props;
        const [count, setCount] = useSharedState(stateName, initialValue);
        const decreaseCount = useCallback(() => setCount((count) => count - 1));
        const increaseCount = useCallback(() => setCount((count) => count + 1));
        return html`
            <div>
                <button onClick=${decreaseCount}>Decrease</button>
                <span>${count}</span>
                <button onClick=${increaseCount}>Increase</button>
            </div>
        `;
    };

    return SharedCounter;
});
