/**
 * Outputs hello into the console with the name parameter, in a randomly selected language
 * @param {string} name
 */
export function hello(name: string) {
    const greetings = {
      english: "Hello",
      bahasa: "Halo",
      spanish: "¡Hola",
      vietnamese: "Chào",
      finnish: "Hei"
    };
  
    const languages = Object.keys(greetings);
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    const greeting = greetings[randomLanguage];
  
    console.log(`${greeting} ${name}!`);
  }
  
  hello("Mediatropy");
  hello("IT Team");
  hello("world");
  