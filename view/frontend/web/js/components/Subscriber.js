define(['react', 'html', 'Agusquiw_React/js/eventBus'], (
    { useEffect, useState },
    html,
    eventBus
) => {
    const Subscriber = (props) => {
        const { eventName } = props;
        const [notifications, setNotifications] = useState([]);
        const hasNotifications = notifications.length !== 0;

        useEffect(() => {
            const subscription = eventBus.subscribe(eventName, (notification) => {
                setNotifications((notifications) => [...notifications, notification]);
            });
            return subscription.dispose;
        }, [eventName]);

        useEffect(() => {
            if (hasNotifications) {
                const timer = setInterval(() => {
                    setNotifications((notifications) => notifications.splice(1));
                }, 1000);
                return () => clearInterval(timer);
            }
        }, [hasNotifications]);

        return html`
            <div>
                <h3>Subscriber for: ${eventName}</h3>
                ${notifications.map(
                    (notification, idx) =>
                        html`<div key=${idx}>
                            <span>${JSON.stringify(notification)}</span>
                        </div>`
                )}
            </div>
        `;
    };

    return Subscriber;
});
