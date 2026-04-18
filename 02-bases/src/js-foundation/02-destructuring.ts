
// console.log(process.env.PORT ?? 3000);

const { COMPUTERNAME, OS, npm_command } = process.env;

// console.log(OS);
// console.log(COMPUTERNAME);
// console.log(npm_command);

const characters:string[] = ['flash', 'Superman', 'Green Lantern', 'Batman'];

const [ , , , batman] = characters;

// console.log(batman);

