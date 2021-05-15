import App from './App.svelte';
import 'virtual:windi.css'
import './main.css';
import './server.js'

const app = new App({
  target: document.body,
});

export default app;