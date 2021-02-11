var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);

let title = `
<title>${thisfilefullname}</title>
`
document.write(title);