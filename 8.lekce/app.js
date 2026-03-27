let counter = 2;

while (counter < 10) {
    let message = counter
    if (counter === 7) {
       message = "7 je tady";
    }
    console.log(message)
    counter++;
}

for (let i = 0; i < 10; i++) {
    if(i === 5) continue;
    console.log(i)
}

for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0 && i !== 50) {
    console.log(i);
  }
}

for (let i = 2; i <= 100; i++) {
  if (i === 50) {
    continue;
  }
  if (i % 2 === 0) {
    console.log(i);
  }
}
