function Receta1() {
        
    Swal.fire({
        imageUrl: 'img/Ar.jpg',
        imageWidth: 1200,
        imageAlt: ''
    })
    
}
function Receta2() {
        
  Swal.fire({
      imageUrl: 'img/Br.jpg',
      imageWidth: 1200,
      imageAlt: ''
  })
  
}
function Receta3() {
        
  Swal.fire({
      imageUrl: 'img/Cr.jpg',
      imageWidth: 1200,
      imageAlt: ''
  })
  
}
function Descargar() {
  Swal.fire({
    title: 'Receta descargada con éxito!!!',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
    `
  })
}

function Eliminar() {

    Swal.fire({
        title: '¿Está seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, bórralo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Eliminado!',
            'El platillo ha sido eliminado.',
            'success'
          )
        }
      })
    
}