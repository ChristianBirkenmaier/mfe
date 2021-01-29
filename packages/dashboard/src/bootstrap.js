import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#__dashboard-dev-root");
    if (devRoot) {
        // If we're running Marketing in isolation, we're providing a BrwoserHistory object
        // so that navigating around is easier (url updates)
        mount(devRoot);
    }
}

export { mount };
