class {
  html(){
    const source = `<!DOCTYPE html>
      <html>
        <head>
          <base target="_top">
        </head>
        <body>
        <p id="msg"></p>
        <script>
          google.script.run.withSuccessHandler((msg) => {
            document.getElementById("msg").innerText = msg;
          }).runFunction("getMsg",{})
        </script>
      </body>
    </html>`
    return {source: source}
  }
  returnHello({name}){
    return {message: `Hello, ${name}!`}
  }
  returnGM({name}){
    return {message: `Good Morning, ${name}!`}
  }
}
