const sentence = "hello there from lighthouse labs."
let timer = 0;
let nextSentence = `${sentence}\n`
for (let char of nextSentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 50)
};