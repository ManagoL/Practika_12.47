function ProvercaRegistr(){

    let Email = document.getElementById('Email').value;
    
    let Pass = document.getElementById('Pass').value;
    
    if(Email === "" || Pass === ""){
      alert('Пожалуйста, заполните все поля');
      return false;
    } else {
      alert("Успешно!")
      return true;
    }}
    
    let usernSubmitAutoame = document.getElementById('SubmitAuto')
    
    SubmitAuto.addEventListener("click", ()=>{
      ProvercaRegistr()
    })
    