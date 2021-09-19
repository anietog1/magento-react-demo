define(['react', 'html', 'Agusquiw_React/js/eventBus'], (
    { useCallback, useEffect, useState },
    html,
    eventBus
) => {
    const Subscriber = (props) => {
        const { eventName } = props;
        const [data, setData] = useState(null);

        useEffect(() => {
            const subscription = eventBus.subscribe(eventName, setData);
            return subscription.dispose;
        }, [eventName]);

        useEffect(() => {
            if (data) {
                const timer = setTimeout(() => setData(null), 1000);
                return () => clearTimeout(timer);
            }
        }, [data]);

        return html`
            <div>
                <h3>Subscriber for: ${eventName}</h3>
                ${data ? html`<span>${JSON.stringify(data)}</span>` : null}
            </div>
        `;
    };

    return Subscriber;
});
