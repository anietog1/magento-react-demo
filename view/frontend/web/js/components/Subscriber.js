define(['react', 'html', 'Agusquiw_React/js/eventBus'], (
    { useCallback, useEffect, useState },
    html,
    eventBus
) => {
    const Subscriber = (props) => {
        const { eventName } = props;
        const [data, setData] = useState();

        useEffect(() => {
            const subscription = eventBus.subscribe(eventName, setData);
            return subscription.dispose;
        }, [eventName]);

        return html`
            <div>
                <h3>Subscriber for: ${eventName}</h3>
                <span>${JSON.stringify(data)}</span>
            </div>
        `;
    };

    return Subscriber;
});
