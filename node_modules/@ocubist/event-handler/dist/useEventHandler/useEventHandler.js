"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEvents = exports.useEventHandler = void 0;
var singleton_manager_1 = require("@ocubist/singleton-manager");
var events_1 = require("events");
var setSingletonIfNotExists = (0, singleton_manager_1.useSingleton)("@ocubist").setSingletonIfNotExists;
var getGlobalEventEmitter = function () {
    return setSingletonIfNotExists("global-event-emitter", function () { return new events_1.EventEmitter(); });
};
var getEventNamesMap = function () {
    return setSingletonIfNotExists("global-event-emitter-events", function () { return new Set(); });
};
/**
 * Custom hook to manage event handling with `on` and `once` listeners.
 *
 * @param eventName - The name of the event.
 * @returns The event handler object with methods to manage events.
 */
var useEventHandler = function (eventName) {
    var eventEmitter = getGlobalEventEmitter();
    /**
     * Emits the event with optional data.
     *
     * @param data - Optional data to pass to the event listeners.
     */
    var emit = function (data) {
        eventEmitter.emit("on:".concat(eventName), data);
        eventEmitter.emit("once:".concat(eventName), data);
        var eventNames = getEventNamesMap();
        eventNames.add(eventName);
    };
    /**
     * Registers a persistent event listener.
     *
     * @param listener - The event listener to register.
     */
    var on = function (listener) {
        if (!eventEmitter.listeners("on:".concat(eventName)).includes(listener)) {
            if (eventEmitter.listeners("once:".concat(eventName)).includes(listener)) {
                eventEmitter.off("once:".concat(eventName), listener);
            }
            eventEmitter.on("on:".concat(eventName), listener);
            var eventNames = getEventNamesMap();
            eventNames.add(eventName);
        }
    };
    /**
     * Registers a one-time event listener.
     *
     * @param listener - The event listener to register.
     */
    var once = function (listener) {
        if (!eventEmitter.listeners("once:".concat(eventName)).includes(listener)) {
            if (eventEmitter.listeners("on:".concat(eventName)).includes(listener)) {
                eventEmitter.off("on:".concat(eventName), listener);
            }
            eventEmitter.once("once:".concat(eventName), listener);
            var eventNames = getEventNamesMap();
            eventNames.add(eventName);
        }
    };
    /**
     * Removes the event listener.
     *
     * @param listener - The event listener to remove.
     */
    var off = function (listener) {
        eventEmitter.off("on:".concat(eventName), listener);
        eventEmitter.off("once:".concat(eventName), listener);
        if (eventEmitter.listenerCount("on:".concat(eventName)) === 0 &&
            eventEmitter.listenerCount("once:".concat(eventName)) === 0) {
            var eventNames = getEventNamesMap();
            eventNames.delete(eventName);
        }
    };
    /**
     * Returns the count of listeners for the event.
     *
     * @returns The number of listeners.
     */
    var listenerCount = function () {
        return (eventEmitter.listenerCount("on:".concat(eventName)) +
            eventEmitter.listenerCount("once:".concat(eventName)));
    };
    /**
     * Gets the list of listeners for the event.
     *
     * @returns The array of listeners.
     */
    var getListeners = function () {
        return __spreadArray(__spreadArray([], eventEmitter.listeners("on:".concat(eventName)), true), eventEmitter.listeners("once:".concat(eventName)), true);
    };
    /**
     * Removes all listeners for the event.
     */
    var removeAllListeners = function () {
        eventEmitter.removeAllListeners("on:".concat(eventName));
        eventEmitter.removeAllListeners("once:".concat(eventName));
        var eventNames = getEventNamesMap();
        eventNames.delete(eventName);
    };
    return {
        emit: emit,
        on: on,
        once: once,
        off: off,
        listenerCount: listenerCount,
        getListeners: getListeners,
        removeAllListeners: removeAllListeners,
    };
};
exports.useEventHandler = useEventHandler;
/**
 * Retrieves all event names.
 *
 * @returns An array of all event names.
 */
var getAllEvents = function () {
    var eventNames = getEventNamesMap();
    return Array.from(eventNames);
};
exports.getAllEvents = getAllEvents;
//# sourceMappingURL=useEventHandler.js.map