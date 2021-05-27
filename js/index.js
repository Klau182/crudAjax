const d = document;
  $table = d.querySelector("crud-table"),
  $form = d.querySelector("crud-form"),
  $title = d.querySelector("crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment()
  
  const ajax = (options) => {
    let { url, method, success, error, data } = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange",(e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300){
        let json = JSON.parse(xhr.responseText);
        success(json);
      }else{
        let message = xhr.statusText || "Ocurrio un error";
        error(`Error ${xhr.status}: ${message}`);
      }
    });
    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
  }
  const getAll= () => {
    ajax({
      method: "GET",
      url: "http://localhost:3000/santos",
      success:(res) => { console.log(res) },
      error:(err) => { console.log(err) },
      data:null
    })
  }

  d.addEventListener("DOMContentLoaded", getAll);