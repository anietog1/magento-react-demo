define(['react', 'html', 'Agusquiw_React/js/eventBus'], (
    { useCallback, useState },
    html,
    eventBus
) => {
    const Publisher = (props) => {
        const { eventName, initialData = '' } = props;
        const [data, setData] = useState(initialData);

        const handleChange = useCallback((event) => setData(event.target.value));
        const handleSubmit = useCallback(
            (event) => {
                event.preventDefault();
                eventBus.publish(eventName, data);
            },
            [eventName, data]
        );

        return html`
            <div>
                <h3>Publisher for: ${eventName}</h3>
                <form onSubmit=${handleSubmit}>
                    <input value=${data} onChange=${handleChange} />
                    <button type="submit">Notify</button>
                </form>
            </div>
        `;
    };

    return Publisher;
});
