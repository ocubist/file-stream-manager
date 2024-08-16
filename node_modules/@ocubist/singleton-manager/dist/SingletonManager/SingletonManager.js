"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSingleton = exports.SingletonAlreadyExistsError = exports.SingletonClearConfirmationError = exports.SingletonDoesNotExistError = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var utils_1 = require("@ocubist/utils");
var craftMysticError = (0, error_alchemy_1.useErrorAlchemy)("singleton-manager", "SingletonManager-Class").craftMysticError;
exports.SingletonDoesNotExistError = craftMysticError({
    name: "SingletonDoesNotExistError",
    cause: "Tried to get a Singleton, that does not exist",
    errorCode: "DATA_VALUE_NOT_FOUND",
    severity: "unexpected",
});
exports.SingletonClearConfirmationError = craftMysticError({
    name: "SingletonClearConfirmationError",
    cause: "Confirmation must be exactly 'CONFIRM'",
    errorCode: "VALIDATION_ERROR",
    severity: "unexpected",
});
exports.SingletonAlreadyExistsError = craftMysticError({
    name: "SingletonAlreadyExistsError",
    cause: "Tried to set a singleton (without the force-flag), that already exists",
    errorCode: "DATA_INTEGRITY_VIOLATION",
    severity: "unexpected",
});
var SingletonHold = /** @class */ (function () {
    function SingletonHold() {
    }
    SingletonHold.getOrAdd = function (name) {
        if (!Object.hasOwnProperty.call(SingletonHold.singletons, name)) {
            SingletonHold.singletons[name] = new SingletonManager();
        }
        var singletonManager = SingletonHold.singletons[name];
        (0, error_alchemy_1.assertDefined)(singletonManager);
        return singletonManager;
    };
    SingletonHold.singletons = {};
    return SingletonHold;
}());
var SingletonManager = /** @class */ (function () {
    function SingletonManager() {
        this.singletons = {};
    }
    SingletonManager.prototype.set = function (name, singleton) {
        this.singletons[name] = singleton;
    };
    SingletonManager.prototype.get = function (name) {
        if (!this.has(name)) {
            throw new exports.SingletonDoesNotExistError({
                message: "Singleton with name '".concat(name, "' not found"),
                payload: { name: name },
            });
        }
        return this.singletons[name];
    };
    SingletonManager.prototype.setIfNotExists = function (name, factoryFunction) {
        if (!this.has(name)) {
            this.set(name, factoryFunction());
        }
        return this.get(name);
    };
    SingletonManager.prototype.has = function (name) {
        return Object.hasOwnProperty.call(this.singletons, name);
    };
    SingletonManager.prototype.remove = function (name) {
        if (this.has(name)) {
            delete this.singletons[name];
        }
    };
    SingletonManager.prototype.clear = function (confirmation) {
        if (confirmation !== "CONFIRM") {
            throw new exports.SingletonClearConfirmationError({
                message: "Confirmation '".concat(confirmation, "' invalid"),
                payload: { confirmation: confirmation },
            });
        }
        this.singletons = {};
    };
    SingletonManager.prototype.getAllKeys = function () {
        return Object.keys(this.singletons);
    };
    return SingletonManager;
}());
/**
 * Provides an interface to manage singletons by name. This function ensures that there is
 * only one instance of SingletonManager per name, and it provides methods to interact with
 * the singletons.
 *
 * @param name - The name of the singleton group to manage.
 * @returns An object containing methods to manage singletons within the specified group.
 *          This includes methods to set, get, check existence, update, remove, and clear
 *          singletons, as well as to register and unregister instances as singletons and
 *          retrieve all singleton keys.
 *
 * The returned object contains the following methods:
 * - getSingleton
 * - setSingletonIfNotExists
 * - setSingleton
 * - hasSingleton
 * - updateSingleton
 * - removeSingleton
 * - registerInstanceAsSingleton
 * - unregisterInstanceAsSingleton
 * - clearSingletons
 * - getAllSingletonKeys
 */
var useSingleton = function (name) {
    var singletonManager = SingletonHold.getOrAdd(name);
    /**
     * Registers a singleton with a specified name.
     * If a singleton with the same name already exists and the `force` flag is not set,
     * an error is thrown.
     * @param name - The name of the singleton.
     * @param singleton - The singleton instance to register.
     * @param force - A boolean flag. If set to true, it will overwrite an existing singleton
     *                with the same name. Defaults to false.
     * @throws SingletonAlreadyExistsError - If a singleton with the same name already exists
     *                                       and `force` is false.
     */
    function setSingleton(name, singleton, force) {
        if (force === void 0) { force = false; }
        if (!singletonManager.has(name) || force) {
            singletonManager.set(name, singleton);
        }
        else {
            throw new exports.SingletonAlreadyExistsError({
                message: "Singleton with name '".concat(name, "' already exists."),
                payload: { name: name, singleton: singleton, force: force },
            });
        }
    }
    /**
     * Retrieves a singleton by its name.
     * @param name - The name of the singleton to retrieve.
     * @returns The singleton instance.
     * @throws Will throw an error if no singleton with the given name exists.
     */
    function getSingleton(name) {
        return singletonManager.get(name);
    }
    /**
     * Sets a singleton using a factory function if it doesn't exist, and returns it.
     * If the singleton already exists, it returns the existing instance.
     * @param name - The name of the singleton.
     * @param factoryFunction - A function that returns the singleton instance.
     * @returns The singleton instance.
     */
    function setSingletonIfNotExists(name, factoryFunction) {
        return singletonManager.setIfNotExists(name, factoryFunction);
    }
    /**
     * Checks if a singleton exists by its name.
     * @param name - The name of the singleton to check.
     * @returns True if the singleton exists, false otherwise.
     */
    function hasSingleton(name) {
        return singletonManager.has(name);
    }
    /**
     * Updates an existing singleton.
     * @param name - The name of the singleton to update.
     * @param singleton - The new singleton instance.
     * @returns The updated singleton instance.
     * @throws Will throw an error if no singleton with the given name exists.
     */
    function updateSingleton(name, singleton) {
        if (!singletonManager.has(name)) {
            throw new exports.SingletonDoesNotExistError({
                message: "Singleton with name '".concat(name, "' not found"),
                payload: { name: name, singleton: singleton },
            });
        }
        singletonManager.set(name, singleton);
        return singleton;
    }
    /**
     * Removes a singleton by its name.
     * @param name - The name of the singleton to remove.
     */
    function removeSingleton(name) {
        singletonManager.remove(name);
    }
    /**
     * Registers an instance as a singleton with a unique identifier.
     * @param instance - The instance to be registered as a singleton.
     * @returns A unique identifier (UUID) for the registered instance.
     */
    function registerInstanceAsSingleton(instance) {
        var id = (0, utils_1.createUUID)();
        setSingleton(id, instance);
        return id;
    }
    /**
     * Unregisters a singleton instance using its unique identifier.
     * @param id - UUID of the singleton instance to unregister.
     */
    function unregisterInstanceAsSingleton(id) {
        removeSingleton(id);
    }
    /**
     * Clears all singletons from the manager.
     */
    function clearSingletons(confirmation) {
        singletonManager.clear(confirmation);
    }
    /**
     * Retrieves all keys (names) of registered singletons.
     * @returns An array of singleton keys.
     */
    function getAllSingletonKeys() {
        return singletonManager.getAllKeys();
    }
    return {
        getSingleton: getSingleton,
        setSingletonIfNotExists: setSingletonIfNotExists,
        setSingleton: setSingleton,
        hasSingleton: hasSingleton,
        updateSingleton: updateSingleton,
        removeSingleton: removeSingleton,
        registerInstanceAsSingleton: registerInstanceAsSingleton,
        unregisterInstanceAsSingleton: unregisterInstanceAsSingleton,
        clearSingletons: clearSingletons,
        getAllSingletonKeys: getAllSingletonKeys,
    };
};
exports.useSingleton = useSingleton;
//# sourceMappingURL=SingletonManager.js.map