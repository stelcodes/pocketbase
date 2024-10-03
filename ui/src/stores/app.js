import { writable } from "svelte/store";

export const pageTitle = writable('');

export const appName = writable('');

export const hideControls = writable(false);

export const hideRecordControls = writable(false);
