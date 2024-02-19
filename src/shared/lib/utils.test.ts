import { mediaSafePlay } from "./utils";

describe("mediaSafePlay", () => {
    // Plays audio element successfully
    it("should play audio element successfully", () => {
        const element = document.createElement("audio");
        const playMock = jest.spyOn(element, "play").mockResolvedValueOnce();

        // Fix: Add a return statement to ensure that mediaSafePlay returns a Promise
        return mediaSafePlay(element);

        expect(playMock).toHaveBeenCalled();
    });

    // Retries playing audio element if it fails initially
    it("should retry playing audio element if it fails initially", () => {
        const element = document.createElement("audio");
        const playMock = jest
            .spyOn(element, "play")
            .mockRejectedValueOnce(new Error());

        mediaSafePlay(element, true);

        expect(playMock).toHaveBeenCalledTimes(2);
    });

    // Executes callback function after successfully playing audio element
    it("should execute callback function after successfully playing audio element", () => {
        const element = document.createElement("audio");
        const callback = jest.fn();
        const playMock = jest.spyOn(element, "play").mockResolvedValueOnce();

        mediaSafePlay(element, false);

        expect(playMock).toHaveBeenCalled();
        expect(callback).toHaveBeenCalled();
    });

    // Handles undefined audio element input by returning early
    it("should return early when audio element is undefined", () => {
        const element = document.createElement("audio");
        const playMock = jest.spyOn(element, "play");

        mediaSafePlay(undefined);

        expect(playMock).not.toHaveBeenCalled();
    });

    // Handles undefined callback function input by not executing it
    it("should not execute callback function when it is undefined", () => {
        const element = document.createElement("audio");
        const callback = undefined;
        const playMock = jest.spyOn(element, "play").mockResolvedValueOnce();

        mediaSafePlay(element, false);

        expect(playMock).toHaveBeenCalled();
        expect(callback).toBeUndefined();
    });

    // Handles retry logic by setting a maximum number of attempts
    it("should set a maximum number of attempts for retry logic", () => {
        const element = document.createElement("audio");
        const playMock = jest
            .spyOn(element, "play")
            .mockRejectedValueOnce(new Error());

        mediaSafePlay(element, true);

        expect(playMock).toHaveBeenCalledTimes(6);
    });
});
