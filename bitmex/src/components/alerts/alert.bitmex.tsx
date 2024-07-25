import alert from 'sweetalert2';

export const handleInsertIntoDataBaseAlertSuccess = ()=>{

    alert.fire({
        icon: "success",
        title: "Successfully Inserted",
        showConfirmButton: false,
        timer: 1500
      });
}

export const handleInsertIntoDataBaseAlertError = ()=>{

    alert.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500
      });
}