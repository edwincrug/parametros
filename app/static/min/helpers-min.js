function getParameterByName(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)"),r=a.exec(location.search);return null===r?"":decodeURIComponent(r[1].replace(/\+/g," "))}