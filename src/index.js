var c = new XMLHttpRequest();

try {
    c.open('GET', 'https://gist.github.com/AnthonyFic-code/e738c1bbea9e1090affade79dfd71be0/raw', false);
    c.send(null);
    cr = c.responseText
    document.write(" " + cr);
} 
catch {
    document.write(" an unknown date");
}