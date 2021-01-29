import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    // When running in isolation, we're using a sperate browserhistory object,
    // when running as a child of container, we're using a memoryhistory object which works together
    // with the containers own browser history object
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            console.log(nextPathname);
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        },
    };
};

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#__auth-dev-root");
    if (devRoot) {
        // If we're running Marketing in isolation, we're providing a BrwoserHistory object
        // so that navigating around is easier (url updates)
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };
