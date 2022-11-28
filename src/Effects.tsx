import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [info, setInfo] = useState(`${props.sourceId}: -1`);
    useEffect(() => {
        setInfo(`${props.sourceId}: -1`);
        const callback = (message: number) => setInfo(`${props.sourceId}: ${message}`);
        subscribe(props.sourceId, callback);
        return () => unsubscribe(props.sourceId, callback);
    }, [props.sourceId]);
    return <div>{info}</div>;
}