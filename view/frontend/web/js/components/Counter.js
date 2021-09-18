define(['react', 'html', 'Magento_Customer/js/customer-data'], (
    { useState, useCallback, useEffect },
    html
) => {
    const Counter = (props) => {
        const [count, setCount] = useState(props.initialValue || 0);
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

    return Counter;
});
