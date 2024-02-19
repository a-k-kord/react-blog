const playElement = (
    element: HTMLAudioElement,
    callback?: () => void
): void => {
    element
        .play()
        .then(() => {
            if (callback) {
                callback();
            } else {
                return true;
            }
        })
        .catch((error) => {
            console.log(
                "Failed to play audio. User interaction is required.",
                error
            );
        });
};

export const mediaSafePlay = (
    element: HTMLAudioElement | undefined,
    isRetry?: boolean
): void => {
    if (!element) {
        return;
    }
    if (isRetry) {
        const playAttempt = setInterval(() => {
            playElement(element, () => {
                clearInterval(playAttempt);
            });
        }, 5000);
    } else {
        playElement(element);
    }
};
