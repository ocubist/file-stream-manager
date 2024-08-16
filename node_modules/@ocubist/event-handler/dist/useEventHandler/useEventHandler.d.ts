type EventListener<T = any> = (data: T) => void;
/**
 * Interface representing the event handler object.
 */
export interface UseEventHandlerObject {
    emit: <T = any>(data?: T | undefined) => void;
    on: <T = any>(listener: EventListener<T>) => void;
    once: <T = any>(listener: EventListener<T>) => void;
    off: <T = any>(listener: EventListener<T>) => void;
    listenerCount: () => number;
    getListeners: () => Function[];
    removeAllListeners: () => void;
}
/**
 * Custom hook to manage event handling with `on` and `once` listeners.
 *
 * @param eventName - The name of the event.
 * @returns The event handler object with methods to manage events.
 */
export declare const useEventHandler: (eventName: string) => UseEventHandlerObject;
/**
 * Retrieves all event names.
 *
 * @returns An array of all event names.
 */
export declare const getAllEvents: () => string[];
export {};
//# sourceMappingURL=useEventHandler.d.ts.map