import { HelloWorld } from './HelloWorld';

const helloWorld = new HelloWorld();
const greetingElement = document.getElementById('greeting');

if (greetingElement) {
    greetingElement.innerHTML = 'Loading...';

    async function updateGreeting() {
        const greeting = await helloWorld.greet('Developer');
        greetingElement!.innerHTML = greeting;
    }

    updateGreeting();
} else {
    console.error('Could not find greeting element');
}
