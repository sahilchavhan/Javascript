var a = [12, 34, 52, 56, 21];
console.log(a);
for (i = 0; i <= a.length; i = i + 1) {
  console.log(a[i]);
}

a.sort();
// a.pop();
// a.shift();
a.unshift(1);
a.push(100);
console.log(a);
