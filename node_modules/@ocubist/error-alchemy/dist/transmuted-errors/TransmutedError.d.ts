import { ErrorCode } from "../error-code/types";
import { Severity } from "../severity/types";
import { Payload, TransmutedErrorProps } from "./types";
/**
 * Class representing a transmuted error.
 *
 * @extends Error
 */
export declare class TransmutedError extends Error {
    instanceUuid: string;
    name: string;
    severity: Severity;
    origin?: unknown;
    cause?: string;
    payload: Payload;
    module?: string;
    context?: string;
    errorCode: ErrorCode;
    /**
     * Get a description of the severity level.
     *
     * @returns {string} The severity description.
     */
    get severityDescription(): string;
    /**
     * A simple getter method.
     *
     * @returns {string} A fixed string "works".
     */
    get simpleGetter(): string;
    /**
     * Get the unique identifier for the error.
     *
     * @returns {string} The unique identifier.
     */
    get identifier(): string;
    /**
     * Constructs a new TransmutedError.
     *
     * @param {TransmutedErrorProps} props - The properties of the transmuted error.
     */
    constructor(props: TransmutedErrorProps);
}
//# sourceMappingURL=TransmutedError.d.ts.map